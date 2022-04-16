import seedrandom from "seedrandom";

import {
  ResolutionUnit,
  EventType,
  type Slo,
  type SloEvent,
  type Slos,
  type SlosData,
} from "./types";
import { increaseDate } from "./util";
import { calculateErrorBudget } from "./lib/SloChart/utils";

const seededUuid = (seed: string): string => {
  const rand = seedrandom(seed);
  const ALPHA = "0123456789abcdef";
  const randChars = (num: number) => {
    let str = "";
    for (let i = 0; i < num; i++)
      str += ALPHA[Math.floor(rand() * ALPHA.length)];
    return str;
  };
  return `${randChars(8)}-${randChars(4)}-${randChars(4)}-${randChars(
    4
  )}-${randChars(12)}`;
};

const generateMockSlo = (seed: string) => {
  const addDays = (days: number, date: string | number | Date = new Date()) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };

  const DAY_RATES = [400, 1000, 1100, 1100, 1100, 1000, 400];

  const seededRandom = seedrandom(seed);

  const slo: Slo = {
    id: seededUuid(`${seed}-uuid`),
    windowDays: 30,
    threshold: 99,
  };

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - slo.windowDays * 2 + 1);
  startDate.setHours(0, 0, 0, 0);

  const data = [...new Array(slo.windowDays * 2)].map((_, i) => {
    const rand = (min: number, max: number) =>
      min + seededRandom() * (max - min);
    const rate = DAY_RATES[addDays(i - slo.windowDays * 2).getDay()];
    return [
      Math.floor(rand(1, 1.3) * rate),
      Math.floor(rand(0, (0.3 * Math.sin(i / 3)) / 2 + 0.5) ** 4 * rate),
    ];
  });

  const errorBudget = calculateErrorBudget(
    slo,
    data.map((v) => v[0]),
    data.map((v) => v[1])
  );

  const resolutionUnit = ResolutionUnit.DAY;
  const eventDate = new Date(startDate);
  let isBurning = false;
  const events: SloEvent[] = [];
  for (const [i, [good, bad]] of data.entries()) {
    if (i > 0 && errorBudget[i] < 0 && errorBudget[i - 1] >= 0)
      events.push({
        ts: eventDate.getTime(),
        type: EventType.BREACH,
      });

    if ((good / (good + bad)) * 100 < slo.threshold) {
      if (!isBurning) {
        events.push({
          ts: eventDate.getTime(),
          type: EventType.BURN,
        });
        isBurning = true;
      }
    } else {
      isBurning = false;
    }

    increaseDate(eventDate, resolutionUnit, 1);
  }

  return {
    slo,
    startDate,
    resolutionUnit,
    resolutionAmount: 1,
    good: data.map((v) => v[0]),
    bad: data.map((v) => v[1]),
    events,
  };
};

export const generateMockSlos = (
  num = 10,
  seed = "default"
): { slos: Slos; data: SlosData } => {
  const slos: Slos = {};
  const data: SlosData = {};
  for (let i = 0; i < num; i++) {
    const { slo, startDate, resolutionUnit, good, bad, events } =
      generateMockSlo(`${seed}-${i}`);
    const { id = "" } = slo;
    slos[id] = slo;
    data[id] = {
      events,
      segments: { [resolutionUnit]: [{ start: startDate, good, bad }] },
    };
  }
  return { slos, data };
};

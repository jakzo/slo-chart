import { increaseDate } from "../../util";
import type { ResolutionUnit, SloEvent, Slo } from "../../types";

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const BAR_WIDTH = 0.8;
export const BUDGET_MAX = 100;

export type Zipped<T extends [...unknown[][]]> = {
  [K in keyof T]: T[K] extends unknown[] ? T[K][number] : unknown;
}[];
export const zip = <T extends [...unknown[][]]>(...arrays: T): Zipped<T> => {
  const maxLength = Math.max(0, ...arrays.map((arr) => arr.length));
  const result: unknown[][] = [];
  for (let i = 0; i < maxLength; i++) result.push(arrays.map((arr) => arr[i]));
  return result as Zipped<T>;
};

export const addDays = (
  days: number,
  date: string | number | Date = new Date()
) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const formatTickCounts = (ticks: number[]) => {
  const exponent = Math.min(
    ...ticks.map((n) => {
      if (n === 0) return Infinity;
      let r = 0;
      while (n % 10 === 0) {
        r++;
        n /= 10;
      }
      return r;
    })
  );
  if (exponent < 3) return ticks.map(String);
  const [divisor, letter] =
    exponent < 6 ? [1e3, "k"] : exponent < 9 ? [1e6, "m"] : [1e9, "b"];
  return ticks.map((n) => `${Math.round(n / divisor)}${letter}`);
};

export const formatTickBudgets = (ticks: number[]) => ticks.map((n) => `${n}%`);

export const ticks = (
  values: number[],
  opts: {
    min?: number;
    max?: number;
    suggestedMin?: number;
    suggestedMax?: number;
    maxTicks?: number;
  } = {}
) => {
  const min =
    opts.min ??
    Math.min(
      ...values,
      ...(opts.suggestedMin !== undefined ? [opts.suggestedMin] : [])
    );
  const max =
    opts.max ??
    Math.max(
      ...values,
      ...(opts.suggestedMax !== undefined ? [opts.suggestedMax] : [])
    );
  const maxTicks = opts.maxTicks ?? 10;

  const niceNum = (range: number, round: boolean) => {
    const magnitude = 10 ** Math.floor(Math.log10(range));
    const fraction = range / magnitude;
    const roundFactor = round ? 1.5 : 1;
    const niceFraction =
      fraction < 1 * roundFactor
        ? 1
        : fraction < 2 * roundFactor
        ? 2
        : fraction < 5 * roundFactor
        ? 5
        : 10;
    return niceFraction * magnitude;
  };

  const range = niceNum(max - min, false);
  const tickSpacing = niceNum(range / (maxTicks - 1), true);
  const niceMin = Math.floor(min / tickSpacing) * tickSpacing;
  const niceMax = Math.ceil(max / tickSpacing) * tickSpacing;

  const result: number[] = [];
  let n = niceMin;
  while (n <= niceMax) {
    if (
      (opts.min === undefined || n >= opts.min) &&
      (opts.max === undefined || n <= opts.max)
    )
      result.push(n);
    n += tickSpacing;
  }
  if (max > niceMax) result.push(n);
  while (min < result[0]) result.unshift(result[0] - tickSpacing);
  return result;
};

export const getValueHeight = (
  minValue: number,
  maxValue: number,
  value: number
) => ((value - minValue) / (maxValue - minValue)) * 100;

export const getValueY = (minValue: number, maxValue: number, value: number) =>
  100 - getValueHeight(minValue, maxValue, value);

export const getIndexX = (length: number, index: number) =>
  (100 / length) * (index + 0.5);

export const groupEvents = (
  events: SloEvent[],
  startDate: Date,
  endDate: Date,
  resolutionUnit: ResolutionUnit,
  resolutionAmount: number
): SloEvent[][] => {
  const eventsSorted = [...events].sort((a, b) => a.ts - b.ts);
  const endTime = endDate.getTime();
  let eventIdx = 0;
  const resolutionEnd = new Date(startDate);
  increaseDate(resolutionEnd, resolutionUnit, resolutionAmount);
  let group: SloEvent[] = [];
  const grouped: SloEvent[][] = [];
  while (resolutionEnd < endDate) {
    const event = eventsSorted[eventIdx++];
    while (
      (!event || event.ts >= resolutionEnd.getTime()) &&
      resolutionEnd.getTime() < endTime
    ) {
      grouped.push(group);
      group = [];
      increaseDate(resolutionEnd, resolutionUnit, resolutionAmount);
    }
    if (event) group.push(event);
  }
  grouped.push(group);
  return grouped;
};

export const calculateErrorBudget = (
  slo: Slo,
  good: number[],
  bad: number[]
): number[] => {
  const totals: [number, number] = [0, 0];
  return good.map((n, i) => {
    totals[0] += n - (good[i - slo.windowDays] ?? 0);
    totals[1] += bad[i] - (bad[i - slo.windowDays] ?? 0);
    return (
      (1 - totals[1] / (totals[0] + totals[1]) / (1 - slo.threshold / 100)) *
      100
    );
  });
};

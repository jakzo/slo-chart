import { ResolutionUnit } from "./types";

const DATE_METHODS: Record<
  ResolutionUnit,
  [Extract<keyof Date, `get${string}`>, Extract<keyof Date, `set${string}`>]
> = {
  [ResolutionUnit.YEAR]: ["getFullYear", "setFullYear"],
  [ResolutionUnit.MONTH]: ["getMonth", "setMonth"],
  [ResolutionUnit.DAY]: ["getDate", "setDate"],
  [ResolutionUnit.HOUR]: ["getHours", "setHours"],
  [ResolutionUnit.MINUTE]: ["getMinutes", "setMinutes"],
  [ResolutionUnit.SECOND]: ["getSeconds", "setSeconds"],
};

export const increaseDate = (
  date: Date,
  resolutionUnit: ResolutionUnit,
  amount: number
) => {
  const [methodGet, methodSet] = DATE_METHODS[resolutionUnit];
  date[methodSet](date[methodGet]() + amount);
};

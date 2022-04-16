export type Slos = Record<string, Slo>;
export type SlosData = Record<string, SloData>;

export interface Slo {
  id?: string;
  windowDays: number;
  threshold: number;
}

export interface SloData {
  segments: Partial<Record<ResolutionUnit, SloDataSegment[]>>;
  events: SloEvent[];
}

export interface SloDataSegment {
  start: Date;
  good: number[];
  bad: number[];
}

export enum ResolutionUnit {
  SECOND = "second",
  MINUTE = "minute",
  HOUR = "hour",
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
}

export enum EventType {
  BREACH = "breach",
  BURN = "burn",
  CUSTOM = "custom",
}

export interface SloEvent {
  type: EventType;
  ts: number;
  name?: string;
}

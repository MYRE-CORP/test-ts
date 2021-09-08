import { Resource } from './resource';

export enum Kpi {
  Value = "value",
}

export const kpiResourceMap: Map<Kpi, Resource> = new Map<Kpi, Resource>([
  [Kpi.Value, Resource.VALUATION],
])

export const exportableKpis: Kpi[] = [
  Kpi.Value
];

export enum KpiTrend {
  Down = 1,
  Same = 2,
  Up = 3,
}

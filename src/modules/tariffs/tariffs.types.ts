export interface NormalizedTariff {
  snapshot_date: string;

  warehouse_name: string;
  geo_name: string;

  delivery_base: number;
  delivery_coef: number;
  delivery_liter: number;

  delivery_marketplace_base: number;
  delivery_marketplace_coef: number;
  delivery_marketplace_liter: number;

  storage_base: number;
  storage_coef: number;
  storage_liter: number;
}
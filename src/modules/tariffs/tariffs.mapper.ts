import { NormalizedTariff } from "./tariffs.types.js";

function parseNumber(value: string | number | null | undefined): number {
  if (!value) return 0;
  if (typeof value === "number") return value;
  return Number(value.replace(",", "."));
}

export function normalizeWbResponse(raw: any): NormalizedTariff[] {
  const today = new Date().toISOString().split("T")[0];
  const warehouses = raw?.response?.data?.warehouseList ?? [];

  return warehouses.map((w: any) => ({
    snapshot_date: today,

    warehouse_name: w.warehouseName,
    geo_name: w.geoName,

    delivery_base: parseNumber(w.boxDeliveryBase),
    delivery_coef: parseNumber(w.boxDeliveryCoefExpr),
    delivery_liter: parseNumber(w.boxDeliveryLiter),

    delivery_marketplace_base: parseNumber(
      w.boxDeliveryMarketplaceBase
    ),
    delivery_marketplace_coef: parseNumber(
      w.boxDeliveryMarketplaceCoefExpr
    ),
    delivery_marketplace_liter: parseNumber(
      w.boxDeliveryMarketplaceLiter
    ),

    storage_base: parseNumber(w.boxStorageBase),
    storage_coef: parseNumber(w.boxStorageCoefExpr),
    storage_liter: parseNumber(w.boxStorageLiter),
  }));
}
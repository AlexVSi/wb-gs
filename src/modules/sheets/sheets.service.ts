import { createGoogleClient } from "../../config/google.js";
import { TariffsRepository } from "../tariffs/tariffs.repository.js";

export class SheetsService {
  private sheets = createGoogleClient();
  private repo = new TariffsRepository();

  async syncToday(spreadsheetIds: string[]) {
    const today = new Date().toISOString().split("T")[0];
    const data = await this.repo.getByDate(today);

    const rows = [
      [
        "Склад",
        "Регион",
        "Доставка (база)",
        "Коэф доставки",
        "Литр доставки",
        "Marketplace база",
        "Коэф marketplace",
        "Литр marketplace",
        "Хранение база",
        "Коэф хранения",
        "Литр хранения",
      ],
      ...data.map((t) => [
        t.warehouse_name,
        t.geo_name,
        t.delivery_base,
        t.delivery_coef,
        t.delivery_liter,
        t.delivery_marketplace_base,
        t.delivery_marketplace_coef,
        t.delivery_marketplace_liter,
        t.storage_base,
        t.storage_coef,
        t.storage_liter,
      ]),
    ];

    for (const spreadsheetId of spreadsheetIds) {
      await this.sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "stocks_coefs!A1",
        valueInputOption: "RAW",
        requestBody: { values: rows },
      });
    }
  }
}
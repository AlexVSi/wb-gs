import cron from "node-cron";
import { TariffsService } from "../modules/tariffs/tariffs.service.js";
import { SheetsService } from "../modules/sheets/sheets.service.js";

export function startScheduler() {
  const tariffsService = new TariffsService();
  const sheetsService = new SheetsService();

  const spreadsheetIds =
    process.env.GOOGLE_SPREADSHEET_IDS?.split(",") ?? [];

  cron.schedule("0 * * * *", async () => {
    console.log("Syncing WB tariffs...");
    await tariffsService.syncToday();
  });

  cron.schedule("*/15 * * * *", async () => {
    console.log("Syncing Google Sheets...");
    await sheetsService.syncToday(spreadsheetIds);
  });
}
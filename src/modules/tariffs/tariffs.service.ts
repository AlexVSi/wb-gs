import { TariffsRepository } from "./tariffs.repository.js";
import { fetchWbTariffs } from "./tariffs.api.js";
import { normalizeWbResponse } from "./tariffs.mapper.js";
import { env } from "../../config/env.js";

export class TariffsService {
  private repo = new TariffsRepository();

  async syncToday() {
    const today = new Date().toISOString().split("T")[0];
    const raw = await fetchWbTariffs(env.wbToken, today);

    const normalized = normalizeWbResponse(raw);

    await this.repo.upsertMany(normalized);
  }

  async getTodayTariffs() {
    const today = new Date().toISOString().split("T")[0];
    return this.repo.getByDate(today);
  }
}
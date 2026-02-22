import { knex } from "../../config/knex.js";
import { NormalizedTariff } from "./tariffs.types.js";

export class TariffsRepository {
  async upsertMany(tariffs: NormalizedTariff[]) {
    if (!tariffs.length) return;

    await knex("tariffs")
      .insert(tariffs)
      .onConflict(["snapshot_date", "warehouse_name"])
      .merge();
  }

  async getByDate(date: string) {
    return knex("tariffs")
      .where({ snapshot_date: date })
      .orderBy("delivery_coef", "asc");
  }
}
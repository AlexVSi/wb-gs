import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tariffs", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));

    table.date("snapshot_date").notNullable();

    table.string("warehouse_name").notNullable();
    table.string("geo_name").notNullable();

    table.decimal("delivery_base", 10, 2).notNullable();
    table.decimal("delivery_coef", 10, 4).notNullable();
    table.decimal("delivery_liter", 10, 4).notNullable();

    table.decimal("delivery_marketplace_base", 10, 2).notNullable();
    table.decimal("delivery_marketplace_coef", 10, 4).notNullable();
    table.decimal("delivery_marketplace_liter", 10, 4).notNullable();

    table.decimal("storage_base", 10, 4).notNullable();
    table.decimal("storage_coef", 10, 4).notNullable();
    table.decimal("storage_liter", 10, 4).notNullable();

    table.timestamps(true, true);

    table.unique(["snapshot_date", "warehouse_name"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("tariffs");
}
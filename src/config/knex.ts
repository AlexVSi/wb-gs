import knexModule from "knex";
import config from "../knexfile.js";

export const knex = knexModule(config);

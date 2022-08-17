import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    entities: ["src/entities/*.ts"],
    logging: false,
    synchronize: true,
})
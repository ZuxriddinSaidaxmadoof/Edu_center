import { FileEntity } from "src/modules/file/entities/file.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "../config";

export const typeOrmConfig: DataSourceOptions = {
    type: "postgres",
    url: config.databaseUrl,
    entities: [FileEntity],
    migrations: [__dirname + '/../../database/migration/*{.js, .ts}'],
    synchronize: false
}

export default new DataSource(typeOrmConfig);  
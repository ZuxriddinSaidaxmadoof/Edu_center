import { CourseEntity } from "src/modules/course/entities/course.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "../config";

export const typeOrmConfig: DataSourceOptions = {
    type: "postgres",
    url: config.databaseUrl,
    entities: [CourseEntity],
    migrations: [__dirname + '/../../database/migration/*{.js, .ts}'],
    synchronize: false
}

export default new DataSource(typeOrmConfig);  
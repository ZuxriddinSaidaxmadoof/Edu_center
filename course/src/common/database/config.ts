import { CourseFileEntity } from "src/modules/course-file/entities/course-file.entity";
import { CourseEntity } from "src/modules/course/entities/course.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "../config";

export const typeOrmConfig: DataSourceOptions = {
    type: "postgres",
    url: config.databaseUrl,
    entities: [CourseEntity, CourseFileEntity],
    migrations: [__dirname + '/../../database/migration/*{.js, .ts}'],
    synchronize: false
}

export default new DataSource(typeOrmConfig);  
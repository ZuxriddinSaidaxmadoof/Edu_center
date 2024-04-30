import { UserCourseEntity } from "src/modules/user-course/entities/user-course.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "../config";

export const typeOrmConfig: DataSourceOptions = {
    type: "postgres",
    url: config.databaseUrl,
    entities: [UserEntity, UserCourseEntity],
    migrations: [__dirname + '/../../database/migration/*{.js, .ts}'],
    synchronize: false
}

export default new DataSource(typeOrmConfig);  
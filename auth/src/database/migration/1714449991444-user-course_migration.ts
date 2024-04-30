import { MigrationInterface, QueryRunner } from "typeorm";

export class UserCourseMigration1714449991444 implements MigrationInterface {
    name = 'UserCourseMigration1714449991444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user-course" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_update_at" TIMESTAMP NOT NULL DEFAULT now(), "course_id" integer NOT NULL, "file_id" integer NOT NULL, CONSTRAINT "PK_1ee57d7274a54034b80887a4e14" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user-course"`);
    }

}

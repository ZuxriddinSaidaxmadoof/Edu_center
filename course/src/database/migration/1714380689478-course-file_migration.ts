import { MigrationInterface, QueryRunner } from "typeorm";

export class CourseFileMigration1714380689478 implements MigrationInterface {
    name = 'CourseFileMigration1714380689478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course-file" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_update_at" TIMESTAMP NOT NULL DEFAULT now(), "course_id" integer NOT NULL, "file_id" integer NOT NULL, CONSTRAINT "PK_a2a2c9cac7ba893fdefa4db2f41" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "course-file"`);
    }

}

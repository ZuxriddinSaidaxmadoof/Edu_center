import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCourseFileDto {
    @ApiProperty({type: Number, required: true})
    @IsNumber()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty({type: Number, required: true})
    @IsNumber()
    @IsNotEmpty()
    fileId: number;
}

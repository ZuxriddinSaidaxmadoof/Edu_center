import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserCourseDto {
    @ApiProperty({type: Number, required: true})
    @IsNumber()
    @IsNotEmpty()
    courseId: number;

    @ApiProperty({type: Number, required: true})
    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
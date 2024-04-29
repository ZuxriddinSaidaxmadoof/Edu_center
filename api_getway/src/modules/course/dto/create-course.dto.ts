import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {
    @ApiProperty({required: true, type: String, name: "title"})
    @IsString()
    @IsNotEmpty()
    title: string;
    @ApiProperty({required: true, type: String, name: "description"})
    @IsString()
    @IsNotEmpty()
    description: string;
}

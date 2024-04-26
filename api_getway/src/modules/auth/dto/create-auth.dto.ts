import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({required: true, type: String, name: "login"})
    @IsString()
    @IsNotEmpty()
    login: string;
    @ApiProperty({required: true, type: String, name: "password"})
    @IsString()
    @IsNotEmpty()
    password: string;
}

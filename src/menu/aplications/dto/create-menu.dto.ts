import { IsOptional, IsEmail, MaxLength, IsString, MinLength } from "class-validator";
export class CreateMenuDto {
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    name_menu: string;
}

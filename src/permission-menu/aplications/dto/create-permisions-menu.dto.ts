import { IsOptional, IsEmail, MaxLength, IsString, MinLength } from "class-validator";
export class CreatePermissionDto {
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    name_permission: string;
}

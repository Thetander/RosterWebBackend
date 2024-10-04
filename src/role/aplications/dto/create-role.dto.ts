import { MaxLength, IsString, MinLength } from "class-validator";
export class CreateRoleDto {
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    name_role: string;
}

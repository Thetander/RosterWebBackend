import {IsInt } from "class-validator";
export class CreateMenuRoleDto {
    @IsInt()
    id_role: number;
    @IsInt()
    id_menu: number;
}

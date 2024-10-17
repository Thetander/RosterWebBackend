import {  IsInt } from "class-validator";
export class CreatePermissionMenuDto {
    @IsInt()
    id_permission:number;
    @IsInt()
    id_menu: number;
 
}

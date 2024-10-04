import { IsInt } from "class-validator"


export class CreateEmployeedRoleDto {
    @IsInt()
    id_role:number;
    @IsInt()
    id_employeed:number;
}

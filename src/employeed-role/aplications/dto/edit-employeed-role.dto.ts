import { PartialType } from "@nestjs/swagger";
import { CreateEmployeedRoleDto } from "./create-employeed-role.dto";

export class EditEmployeedRoleDto extends PartialType(CreateEmployeedRoleDto){}

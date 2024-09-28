import { PartialType } from "@nestjs/mapped-types";
import { CreatePermissionDto } from "./create-role.dto";
export class EditPermissionDto extends PartialType(CreatePermissionDto) {}

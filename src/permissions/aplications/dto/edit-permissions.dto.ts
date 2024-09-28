import { PartialType } from "@nestjs/mapped-types";
import { CreatePermissionDto } from "./create-permissions.dto";
export class EditPermissionDto extends PartialType(CreatePermissionDto) {}

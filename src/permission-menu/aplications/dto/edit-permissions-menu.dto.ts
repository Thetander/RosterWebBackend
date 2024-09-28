import { PartialType } from "@nestjs/mapped-types";
import { CreatePermissionDto } from "./create-permisions-menu.dto";
export class EditPermissionDto extends PartialType(CreatePermissionDto) {}

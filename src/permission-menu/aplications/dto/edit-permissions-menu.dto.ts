import { PartialType } from "@nestjs/mapped-types";
import { CreatePermissionMenuDto } from "./create-permisions-menu.dto";
export class EditPermissionMenuDto extends PartialType(CreatePermissionMenuDto) {}

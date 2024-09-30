import { PartialType } from "@nestjs/swagger";
import { CreateEmployeedDto } from "./create-employeed.dto";

export class EditEmployeedDto extends PartialType(CreateEmployeedDto){}

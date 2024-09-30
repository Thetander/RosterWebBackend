import { IsEmail, IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEmployeedDto {
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    name:string;

    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    last_name:string;

    @IsEmail()
    email:string;

    @IsString()
    @MinLength(8)
    @MaxLength(255)
    password:string;
    
    @IsInt()
    Basic_salary:number;
}

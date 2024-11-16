import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsOptional()
    name:string

    @IsEmail()
    @IsOptional()
    email:string

    @IsString()
    @MaxLength(1000)
    msg:string

}

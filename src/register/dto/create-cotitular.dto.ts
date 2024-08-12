import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator"
import { CreatePersonDto } from "./create-person.dto"

export class CreateCoTitularDto extends CreatePersonDto {

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(45)
    email: string

    @IsString()
    @MaxLength(20)
    telefono: string

    @IsString()
    domicilio: string

    @IsBoolean()
    alquila: boolean

    @IsInt()
    costo_alquiler: number
}
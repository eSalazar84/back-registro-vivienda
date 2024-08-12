import { IsBoolean, IsDateString, IsNotEmpty, IsString, MaxLength } from "class-validator"

export class CreatePersonDto {

    @IsString()
    @MaxLength(60)
    @IsNotEmpty()
    nombre: string

    @IsString()
    @MaxLength(60)
    @IsNotEmpty()
    apellido: string

    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    dni: string

    @IsDateString()
    fecha_nacimiento: Date

    @IsBoolean()
    @IsNotEmpty()
    discapacidad: boolean
}
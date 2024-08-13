import { IsString, MaxLength, IsNotEmpty, IsDateString, IsBoolean, IsEmail, IsInt, IsEnum, IsDecimal } from "class-validator"
import { ItipoIngreso } from "src/helpers/ingreso.enum"
import { IUbicacion } from "src/helpers/ubicacion.enum"

export class CreateRegisterDto {
    
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

    @IsEnum(IUbicacion)
    @IsNotEmpty()
    localidad: IUbicacion

    @IsEnum(ItipoIngreso)
    @IsNotEmpty()
    tipo: ItipoIngreso

    @IsString()
    cuit_empleador: string

    @IsDecimal()
    monto: number


}
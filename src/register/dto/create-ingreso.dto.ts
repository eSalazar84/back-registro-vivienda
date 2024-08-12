import { IsDecimal, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { ItipoIngreso } from "src/helpers/ingreso.enum"


export class CreateIngresoDto{

    @IsEnum(ItipoIngreso)
    @IsNotEmpty()
    tipo: ItipoIngreso

    @IsString()
    cuit_empleador: string

    @IsDecimal()
    monto: number

}
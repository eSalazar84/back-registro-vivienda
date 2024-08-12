import { IsEnum, IsNotEmpty } from "class-validator";
import { Ubicacion } from "src/helpers/ubicacion.enum";


export class CreateLocalidadDto {
    
    @IsEnum(Ubicacion)
    @IsNotEmpty()
    localidad: Ubicacion

}
import { IsEnum, IsNotEmpty } from "class-validator";
import { IUbicacion } from "src/helpers/ubicacion.enum";


export class CreateLocalidadDto {
    
    @IsEnum(IUbicacion)
    @IsNotEmpty()
    localidad: IUbicacion

}
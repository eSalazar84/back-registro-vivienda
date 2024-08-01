import { Ubicacion } from "src/helpers/ubicacion.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Localidad {
    @PrimaryGeneratedColumn()
    idLocalidad: number

    @Column({ type: 'enum', enum: Ubicacion })
    localidad: Ubicacion
}
import { IUbicacion } from "src/helpers/ubicacion.enum";
import { Titular } from "src/register/entities/titular.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Localidad {
    @PrimaryGeneratedColumn()
    idLocalidad: number

    @Column({ type: 'enum', enum: IUbicacion })
    localidad: IUbicacion

    @OneToMany(() => Titular, titular => titular.eleccion_lote)
    eleccion_titular: Titular[];
}
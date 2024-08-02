import { Ubicacion } from "src/helpers/ubicacion.enum";
import { Titular } from "src/register/entities/titular.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Localidad {
    @PrimaryGeneratedColumn()
    idLocalidad: number

    @Column({ type: 'enum', enum: Ubicacion })
    localidad: Ubicacion

    @OneToMany(() => Titular, titular => titular.eleccion_lote)
    eleccion_titular: Titular[];
}
import { BaseEntity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Localidad } from "./localidad.entity";


export class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    idPerson: number

    @Column({ type: 'varchar', length: 60, nullable: false })
    nombre_: string

    @Column({ type: 'varchar', length: 60, nullable: false })
    apellido_: string

    @Column({ type: 'varchar', length: 20, unique: true, nullable: false })
    dni_: string

    @Column({ type: 'varchar', nullable: false, unique: true, length: 45 })
    email: string

    @Column({ type: 'varchar', length: 20 })
    telefono: string

    @Column({ type: 'datetime', nullable: false })
    fecha_nacimiento_: Date

    @Column({ type: 'varchar', nullable: true })
    domicilio: string

    @Column({ type: 'boolean', nullable: false, default: false })
    discapacidad_: boolean

    @OneToOne(() => Localidad, localidad => localidad.idLocalidad)
    localidad: number
}
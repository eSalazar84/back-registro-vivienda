import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


export class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 60, nullable: false })
    nombre: string

    @Column({ type: 'varchar', length: 60, nullable: false })
    apellido: string

    @Column({ type: 'varchar', length: 20, unique: true, nullable: false })
    dni: string

    @Column({ type: 'datetime', nullable: false })
    fecha_nacimiento: Date

    @Column({ type: 'boolean', nullable: false, default: false })
    discapacidad: boolean
}
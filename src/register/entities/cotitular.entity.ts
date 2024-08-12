import { Person } from "src/entities/person.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Titular } from "./titular.entity";
import { Ingreso } from "src/entities/ingreso.entity";

@Entity()
export class Co_titular extends Person {
    @Column({ type: 'varchar', nullable: false, unique: true, length: 45 })
    email: string

    @Column({ type: 'varchar', length: 20 })
    telefono: string

    @Column({ type: 'varchar', nullable: true })
    domicilio: string

    @Column({ type: 'boolean' })
    alquila: boolean

    @Column({ type: 'int', nullable: true })
    costo_alquiler: number

    @ManyToOne(() => Titular, titular => titular.id)
    titular_a_cargo: Titular

    @OneToMany(() => Ingreso, ingreso => ingreso.co_titular)
    ingreso: Ingreso[]

}
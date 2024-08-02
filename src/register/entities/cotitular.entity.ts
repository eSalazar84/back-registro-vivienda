import { Person } from "src/entities/person.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Titular } from "./titular.entity";

@Entity()
export class Co_titular extends Person {
    @Column({ type: 'varchar', nullable: false, unique: true, length: 45 })
    email: string

    @Column({ type: 'varchar', length: 20 })
    telefono: string

    @Column({ type: 'varchar', nullable: true })
    domicilio: string

    @ManyToOne(() => Titular, titular => titular.id)
    titular_a_cargo: Titular
}
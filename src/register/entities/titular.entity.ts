import { Person } from "src/entities/person.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Co_titular } from "./cotitular.entity";
import { Localidad } from "src/entities/localidad.entity";

@Entity()
export class Titular extends Person {
    @Column({ type: 'varchar', nullable: false, unique: true, length: 45 })
    email: string

    @Column({ type: 'varchar', length: 20 })
    telefono: string

    @Column({ type: 'varchar', nullable: true })
    domicilio: string

    @OneToMany(() => Co_titular, co_titular => co_titular.id)
    co_titulares: Co_titular

    @ManyToOne(() => Localidad, localidad => localidad.eleccion_titular, { eager: true })
    @JoinColumn()
    eleccion_lote: Localidad;
}

import { Person } from "src/entities/person.entity";
import { Entity, ManyToOne } from "typeorm";
import { Titular } from "./titular.entity";


@Entity()
export class Hijo extends Person {
    @ManyToOne(() => Titular, titular => titular.id)
    titular_responsable: Titular
}
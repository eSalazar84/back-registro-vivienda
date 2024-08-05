import { ItipoIngreso } from "src/helpers/ingreso.enum";
import { Co_titular } from "src/register/entities/cotitular.entity";
import { Titular } from "src/register/entities/titular.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Ingreso {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: ItipoIngreso, nullable: false })
    tipo: ItipoIngreso

    @Column({ type: 'varchar', nullable: true })
    cuit_empleador: string

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monto: number

    @ManyToOne(() => Titular, titular => titular.ingreso)
    titular: Titular

    @ManyToOne(() => Co_titular, co_titular => co_titular.ingreso)
    co_titular: Co_titular

}
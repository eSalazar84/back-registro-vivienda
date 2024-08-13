import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from 'src/entities/person.entity';
import { Repository } from 'typeorm';
import { Titular } from './entities/titular.entity';
import { CreateTitularDto } from './dto/create-titular.dto';
import { Co_titular } from './entities/cotitular.entity';
import { CreateCoTitularDto } from './dto/create-cotitular.dto';
import { Localidad } from 'src/entities/localidad.entity';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { Ingreso } from 'src/entities/ingreso.entity';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { Hijo } from './entities/hijo.entity';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { CreateRegisterDto } from './dto/create-register.dto';
import { IUbicacion } from 'src/helpers/ubicacion.enum';
import { ItipoIngreso } from 'src/helpers/ingreso.enum';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@Injectable()
export class RegisterService {

  constructor(
    @InjectRepository(Person) private readonly personRepository: Repository<CreatePersonDto>,
    @InjectRepository(Titular) private readonly titularRepository: Repository<CreateTitularDto>,
    @InjectRepository(Co_titular) private readonly coTitularRepository: Repository<CreateCoTitularDto>,
    @InjectRepository(Localidad) private readonly localidadRepository: Repository<CreateLocalidadDto>,
    @InjectRepository(Ingreso) private readonly ingresoRepository: Repository<CreateIngresoDto>,
    @InjectRepository(Hijo) private readonly hijoRepository: Repository<CreateHijoDto>
  ) { }


  async create(
    @Body() createTitularDto: CreateTitularDto,
    @Body() createIngresoDto: CreateIngresoDto,
    @Body() createLocalidadDto: CreateLocalidadDto,
    @Body('coTitulares') coTitulares?: CreateCoTitularDto[]
  ): Promise<string> {

    const localidadSelected = this.localidadRepository.create(createLocalidadDto)

    const saveLocalidad = await this.localidadRepository.save(localidadSelected);

    const newIngreso = this.ingresoRepository.create(createIngresoDto)

    const saveIngreso = await this.ingresoRepository.save(newIngreso)

    const newRegister = this.titularRepository.create({
      ...createTitularDto,
      ingreso: [saveIngreso],
      eleccion_lote: saveLocalidad,
    })

    await this.titularRepository.save(newRegister)



    return `Registro creado exitosamente`
  }

  async findAllTitular() {
    return await this.titularRepository.find({ relations: ['ingreso', 'co_titulares', 'eleccion_lote'] });
  }

  async findAllLocalidad() {
    return await this.localidadRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}

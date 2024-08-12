import { Injectable } from '@nestjs/common';
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


  async create(newRegister: CreateRegisterDto) {
    const createRegister = this.titularRepository.create(newRegister)

    return await this.titularRepository.save(createRegister);
  }

  async findAll() {
    return await this.titularRepository.find({relations: ['ingreso', 'co_titulares', 'eleccion_lote']});
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

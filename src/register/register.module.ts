import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Titular } from './entities/titular.entity';
import { Co_titular } from './entities/cotitular.entity';
import { Hijo } from './entities/hijo.entity';
import { Localidad } from 'src/entities/localidad.entity';
import { Person } from 'src/entities/person.entity';
import { Ingreso } from 'src/entities/ingreso.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Titular, Co_titular, Hijo, Localidad, Person, Ingreso
    ])
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService]
})
export class RegisterModule { }

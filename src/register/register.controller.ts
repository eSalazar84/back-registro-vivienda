import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { IUbicacion } from 'src/helpers/ubicacion.enum';
import { ItipoIngreso } from 'src/helpers/ingreso.enum';
import { CreateCoTitularDto } from './dto/create-cotitular.dto';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { CreateTitularDto } from './dto/create-titular.dto';
import { CreateIngresoDto } from './dto/create-ingreso.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }

  @Post()
  async create(
    @Body() createTitularDto: CreateTitularDto,
    @Body() createIngresoDto: CreateIngresoDto,
    @Body() createLocalidadDto: CreateLocalidadDto,
    @Body('coTitulares') coTitulares?: CreateCoTitularDto[]
  ) {
    return await this.registerService.create(createTitularDto,createIngresoDto,createLocalidadDto);
  }

  @Get()
  findAll(@Query('localidad') localidad?: CreateLocalidadDto) {
    if (localidad){
      return this.registerService.findAllLocalidad();

    } else {

      return this.registerService.findAllTitular();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
    return this.registerService.update(+id, updateRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerService.remove(+id);
  }
}

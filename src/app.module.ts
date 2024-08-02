import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'registro_vivienda',
      entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
      synchronize: true
    }),
    RegisterModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

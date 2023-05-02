import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccesModule } from './succes/succes.module';
import { ErrorModule } from './error/error.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { Succes } from './succes/succes.entity';
import { Error } from './error/error.entity'
import { SuccesController } from './succes/succes.controller';
import { ErrorController } from './error/error.controller';
import { SuccesService } from './succes/succes.service';
import { ErrorService } from './error/error.service';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Succes]), TypeOrmModule.forFeature([Error]), SuccesModule, ErrorModule],
  controllers: [AppController, SuccesController, ErrorController],
  providers: [AppService, SuccesService, ErrorService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { SuccesController } from './succes.controller';
import { Succes } from './succes.entity';
import { SuccesService } from './succes.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Succes])],
  controllers: [SuccesController],
  providers: [SuccesService]
})
export class SuccesModule {}

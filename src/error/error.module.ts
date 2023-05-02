import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { ErrorController } from './error.controller';
import { Error } from './error.entity';
import { ErrorService } from './error.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Error])],
  controllers: [ErrorController],
  providers: [ErrorService]
})
export class ErrorModule {}

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Error } from 'src/error/error.entity';
import { Succes } from 'src/succes/succes.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'junia_user',
    password: 'junia_user',
    database: 'junia',
    entities: [Succes,Error],
};
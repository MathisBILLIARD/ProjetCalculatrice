import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Error } from './error.entity';

@Injectable()
export class ErrorService {
    constructor(
        @InjectRepository(Error)
        private readonly succesRepository: Repository<Error>,
      ) {}
      
    async createError() {

        const now = new Date(); // créer une nouvelle date au moment où l'erreur se produit
   
    }
}

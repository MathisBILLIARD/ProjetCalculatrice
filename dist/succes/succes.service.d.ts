import { Repository } from 'typeorm';
import { Succes } from './succes.entity';
export declare class SuccesService {
    private readonly succesRepository;
    constructor(succesRepository: Repository<Succes>);
    createSucces(timeTakenMs: number, created_at: Date): Promise<Succes>;
    getSucces(): Promise<number>;
}

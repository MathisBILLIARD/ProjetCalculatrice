import { Repository } from 'typeorm';
import { Error } from './error.entity';
export declare class ErrorService {
    private readonly succesRepository;
    constructor(succesRepository: Repository<Error>);
    createError(): Promise<void>;
}

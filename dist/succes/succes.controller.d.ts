import { SuccesService } from './succes.service';
export declare class SuccesController {
    private readonly succesService;
    constructor(succesService: SuccesService);
    getSucces(): Promise<number>;
    createSucces(timeTakenMs: number, created_at: Date): Promise<import("./succes.entity").Succes>;
}

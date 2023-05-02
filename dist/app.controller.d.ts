import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    root(res: Response): void;
    getScript(res: Response): void;
    getStyles(res: Response): void;
}

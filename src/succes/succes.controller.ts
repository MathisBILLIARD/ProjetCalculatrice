import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuccesService } from './succes.service';


//localhost:3000/calculatrice
@Controller('calculatrice')
export class SuccesController {
    constructor(private readonly succesService:SuccesService){}

    @Get()
    getSucces(){
        console.log('get time');
        return this.succesService.getSucces();
    }

    @Post() // requete POST 
    createSucces(
        @Body('timeTakenMs') timeTakenMs: number,
        @Body('created_at') created_at: Date,
    ){
    return this.succesService.createSucces(timeTakenMs, created_at)
    }
}

import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as path from 'path';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  root(@Res() res: Response): void {
    res.sendFile(path.join(__dirname, '../index.html'));
  }

  @Get('/script.js')
  getScript(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '../script.js'));
  }

  @Get('/style.css')
  getStyles(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '../style.css'));
  }  
}

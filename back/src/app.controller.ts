import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
 	constructor(private readonly appService: AppService) {}

	 @Get()
	 @UseGuards(AuthGuard("42"))
	 async loginRedirect42(@Req() req: Request): Promise<any> {
		 return this.appService.create(req.user);
	 }

	 @Get("/42")
	 @UseGuards(AuthGuard("42"))
	 async login42(): Promise<any> {
		 return HttpStatus.OK;
	 }
}

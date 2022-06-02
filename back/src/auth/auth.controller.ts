import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get()
	@UseGuards(AuthGuard("42"))
	async loginRedirect(@Req() req: Request): Promise<any> {
		return this.authService.create(req.user);
	}

	@Get("/42")
	@UseGuards(AuthGuard("42"))
	async login(): Promise<any> {
		return HttpStatus.OK;
	}
}

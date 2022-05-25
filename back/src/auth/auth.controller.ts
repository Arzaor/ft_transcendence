import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get()
	@UseGuards(AuthGuard('auth'))
	async Auth42(@Req() req) {}

	@Get('redirect')
	@UseGuards(AuthGuard('auth'))
	AuthRedirect42(@Req() req) {
		return this.authService.login42(req)
	}
}

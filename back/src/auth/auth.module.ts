import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({})
export class AuthModule {
	controllers: [AuthController]
	providers: [AuthService]
}

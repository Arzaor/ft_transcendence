import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { DatabaseModule } from './database/database.module';
import { AuthStrategy } from './auth/auth.strategy';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [DatabaseModule, UserModule, AuthModule],
	controllers: [AppController, UserController, AuthController],
	providers: [AppService, UserService, AuthStrategy, User, AuthService],
})
export class AppModule {}

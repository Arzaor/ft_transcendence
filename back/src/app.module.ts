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

@Module({
	imports: [DatabaseModule, UserModule],
	controllers: [AppController, UserController],
	providers: [AppService, UserService, AuthStrategy, User],
})
export class AppModule {}

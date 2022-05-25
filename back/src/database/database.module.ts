import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			"type": "postgres",
			"host": "db",
			"port": 5432,
			"username": "jbarette",
			"password": "root",
			"database": "test_db",
			"entities": [User],
			"synchronize": true,
		}),
	],
})
export class DatabaseModule {}

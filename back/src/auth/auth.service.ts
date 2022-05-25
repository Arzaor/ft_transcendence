import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	login42(req) {
		if (!req.user) {
			return 'No user from 42'
		}
		const user = new User();
		user.username = req.user.displayName
		async function saveUser(): Promise<void> {
			await this.usersRepository.save(user);
		}
		saveUser();
	}
}

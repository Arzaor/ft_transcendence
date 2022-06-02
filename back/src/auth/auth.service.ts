import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class AuthService {
	create(new_user: any) {
		const userRepository = getRepository(User)
		const user = new User()
		user.username = new_user.user.displayName
		async function test() {
			await userRepository.save(user)
		}
		test()
	}
}

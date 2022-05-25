import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, '42') {

	constructor() {
		super({
			clientID : "cb91d09f7c07e163dca8387884b7bb453363e69af979748af2d7c4c43fccd31c",
			clientSecret : "4838ff7a533b5e78d639f3f0c074eda314b7c98ba76a86f26c6942fb7486b46b",
			callbackURL : "http://localhost:4200",
			profileFields: {
				'displayName': 'displayname'
			}
		})
	}

	async validate (accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
		const user = {
			displayName: profile.displayName,
			accessToken
		}
		done(null, user);
	}
}

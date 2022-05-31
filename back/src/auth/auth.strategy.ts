import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-42";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, "42") {
	constructor() {
		super({
			clientID: process.env.APP_ID,
			clientSecret: process.env.APP_SECRET,
			callbackURL: "http://localhost:3000",
			profileFields: {
				'displayName': 'displayname'
			}
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err: any, user: any, info?: any) => void
	): Promise<any> {
		const user = {
			displayName: profile.displayName,
		};
		const payload = {
			user,
			accessToken,
		};

		done(null, payload);
	}
}
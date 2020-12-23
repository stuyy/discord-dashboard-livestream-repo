import { Strategy } from 'passport-discord';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.AUTH_APP_CLIENT_ID,
      clientSecret: process.env.AUTH_APP_CLIENT_SECRET,
      callbackURL: process.env.AUTH_APP_REDIRECT_URI,
      scope: ['identify', 'guilds'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    const user = await this.authService.validateDiscordUser(profile);
    return user;
  }
}

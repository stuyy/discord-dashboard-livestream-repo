import { Injectable, Inject } from '@nestjs/common';
import User from '../interfaces/User';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) { }
  async validateDiscordUser({ username, discriminator, id: discordId, avatar, guilds}) {
    const findUser = await this.userModel
      .findOneAndUpdate(
        { discordId },
        { username, discriminator, avatar, guilds }, { new: true });
    if (findUser) {
      console.log('user was found!');
      return findUser;
    } else {
      console.log('new user');
      const newUser = await this.userModel.create({
        username, discriminator, discordId, avatar, guilds, roles: ['USER']
      });
      return newUser.save();
    }
  }
  
}

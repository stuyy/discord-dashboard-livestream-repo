import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import User from '../interfaces/User';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: User, done: (err: Error, user: any) => void): any {
    done(null, user);
  }

  deserializeUser(userId: string, done: (err: Error, payload: string) => void): any {
    done(null, userId);
  }
}

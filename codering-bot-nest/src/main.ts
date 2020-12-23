import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as session from 'express-session';
import * as MongoStore from 'connect-mongo';
import * as passport from 'passport';
import * as mongoose from 'mongoose';

const Store = MongoStore(session);

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3001/graphql'],
    credentials: true,
  });

  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000 * 24
    },
    store: new Store({ mongooseConnection: mongoose.connection }),
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.setGlobalPrefix('api');
  await app.listen(3001);
}

bootstrap();

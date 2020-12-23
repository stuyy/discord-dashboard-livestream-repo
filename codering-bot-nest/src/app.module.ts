import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscordModule } from './discord/discord.module';
import environment from './environment/environment';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './graphql/app.resolver';
import { GuildResolver } from './graphql/guilds.resolver';
import { DiscordService } from './discord/services/discord/discord.service';
import { CommandResolver } from './graphql/commands.resolver';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    MongooseModule.forRoot(environment.database),
    DiscordModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      typePaths: ['./**/*.graphql'],
      cors: {
        origin: 'http://localhost:3000'
      },
      context: ({ req }) => ({ req }),
      path: '/api'
    })
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, CommandResolver, GuildResolver,  DiscordService],
})
export class AppModule {}

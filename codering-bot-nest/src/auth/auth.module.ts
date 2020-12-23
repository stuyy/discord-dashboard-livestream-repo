import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth.service';
import { DiscordStrategy } from './strategies/discord.strategy';
import { DatabaseModule } from 'src/database/database.module';
import { SessionSerializer } from './serializer/serializer';
import { DiscordService } from './services/discord/discord.service';

@Module({
  controllers: [AuthController],
  imports: [DatabaseModule],
  providers:[
    AuthService,
    DiscordStrategy,
    SessionSerializer,
    DiscordService,
  ]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { DiscordController } from './controllers/discord/discord.controller';
import { DiscordService } from './services/discord/discord.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [],
  controllers: [DiscordController],
  providers: [DiscordService],
})
export class DiscordModule {}

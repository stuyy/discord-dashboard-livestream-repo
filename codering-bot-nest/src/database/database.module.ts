import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/db.provider';
import { userProvider } from './providers/user.provider';
import { guildConfigProvider } from './providers/guildconfig.provider';
import { CommandProvider } from './providers/command.provider';

@Module({
  providers: [
    ...databaseProviders,
    ...userProvider,
    ...guildConfigProvider,
    ...CommandProvider,
  ],
  exports: [
    ...databaseProviders,
    ...userProvider,
    ...guildConfigProvider,
    ...CommandProvider,
  ]
})
export class DatabaseModule {
  
}

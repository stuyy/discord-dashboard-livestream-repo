import { Args, Mutation, Query, Resolver, Subscription, GqlExecutionContext } from '@nestjs/graphql';
import { ParseIntPipe, createParamDecorator, UseGuards, ExecutionContext } from '@nestjs/common';
import User from 'src/auth/interfaces/User';
import { AuthenticatedGuard } from 'src/auth/guards/auth.guard';
import { GraphQLAuthGuard } from 'src/auth/guards/graphql-auth.guard';
import { filterMutualGuilds } from 'src/utils/Utils';
import { DiscordService } from 'src/discord/services/discord/discord.service';
import { response } from 'express';

const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
);

@Resolver('Guilds')
export class GuildResolver {
  constructor(private discord: DiscordService) {}

  @Query('getMutualGuilds')
  @UseGuards(GraphQLAuthGuard)
  async getMutualGuilds(@CurrentUser() user: User) {
    const botGuilds = await this.discord.getDiscordGuilds();
    const filteredGuilds = filterMutualGuilds(user.guilds, botGuilds);
    return filteredGuilds;
  }

  @Query('getGuildConfig')
  @UseGuards(GraphQLAuthGuard)
  async getGuildConfig(
    @CurrentUser() user: User,
    @Args('guildId', { type: () => String }) guildId: string,
  ) {
    const result = await this.discord.getGuildConfig(guildId);
    console.log(guildId);
    if (result) {
      return result;
    } else {
      throw new Error('Guild not found');
    }
  }

  @Query('getRoles')
  @UseGuards(GraphQLAuthGuard)
  async getGuildRoles(
    @Args('guildId', { type: () => String }) guildId: string,
  ) {
    console.log(guildId);
    const roles = await this.discord.getGuildRoles(guildId);
    return roles;
  }

  @Query('getChannels')
  @UseGuards(GraphQLAuthGuard)
  async getGuildChannels(
    @Args('guildId', { type: () => String }) guildId: string,
  ) {
    console.log(guildId);
    const channels = await this.discord.getGuildChannels(guildId);
    const filteredChannels = channels.filter(channel => channel.type === 0);
    return filteredChannels;
  }

  @Mutation()
  @UseGuards(GraphQLAuthGuard)
  async updatePrefixById(
    @Args('guildId') guildId: string,
    @Args('prefix') prefix: string,
  ) {
    const guildConfig = this.discord.updateGuildPrefix(guildId, prefix);
    return guildConfig;
  }

  @Mutation()
  @UseGuards(GraphQLAuthGuard)
  async updateDefaultRole(
    @Args('guildId') guildId: string,
    @Args('roleId') roleId: string,
  ) {
    return this.discord.updateDefaultRole(guildId, roleId);
  }

  
}
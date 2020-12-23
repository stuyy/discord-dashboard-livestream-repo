import { Controller, Get, Req, Res, UseGuards, HttpStatus, Post, Patch, } from '@nestjs/common';
import { Request, Response } from 'express';
import { DiscordService } from 'src/discord/services/discord/discord.service';
import { AuthenticatedGuard } from 'src/auth/guards/auth.guard';


@Controller('discord')
export class DiscordController {
  constructor(private discordService: DiscordService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('guilds/:guildId/roles')
  public async getGuildRoles(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const { guildId } = request.params;
    const roles = await this.discordService.getGuildRoles(guildId);
    response.send(roles);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('guilds/:guildId/channels')
  public async getGuildChannels(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const { guildId } = request.params;
    const channels = await this.discordService.getGuildChannels(guildId);
    const filteredChannels = channels.filter(channel => channel.type === 0);
    response.send(filteredChannels);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('guilds/:guildId')
  public async getGuildData(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const { guildId } = request.params;
    try {
      const result = await this.discordService.getGuildConfig(guildId);
      return result
        ? response.send(result)
        : response.sendStatus(HttpStatus.BAD_REQUEST);
    } catch (err) {
      console.log(err);
      return response.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Post('guilds/:guildId/prefix')
  public async updateGuildPrefix(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const { guildId } = request.params;
    const { prefix } = request.body;
    if (!prefix) return response.sendStatus(HttpStatus.BAD_REQUEST);
    try {
      const result = await this.discordService.updateGuildPrefix(
        guildId,
        prefix,
      );
      return result
        ? response.sendStatus(HttpStatus.OK)
        : response.sendStatus(HttpStatus.BAD_REQUEST);
    } catch (err) {
      console.log(err);
      response.sendStatus(HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Patch('guilds/:guildId/logging')
  public async patchGuildLogging(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const { guildId } = request.params;
    const { welcomeChannel, msgChannel, modLogChannel } = request.body;
    // const result = this.discordService.updateGuildLogging({
    //   welcomeChannel,
    //   msgChannel,
    //   modLogChannel,
    // });
  }
}

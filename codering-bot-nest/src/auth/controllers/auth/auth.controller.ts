import { Controller, Get, Req, Res, UseGuards, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { DiscordLoginGuard } from 'src/auth/guards/discord.guard';
import { AuthenticatedGuard } from 'src/auth/guards/auth.guard';
import { filterMutualGuilds } from 'src/utils/Utils';
import { DiscordService } from 'src/auth/services/discord/discord.service';
import User from 'src/auth/interfaces/User';

@Controller('auth')
export class AuthController {
  constructor(private discordService: DiscordService) { }

  @UseGuards(AuthenticatedGuard)
  @Get()
  public async getAuthDetails(
    @Req() request: Request | any,
    @Res() response: Response) {
      const { user } = <{ user: User }>request;
      console.log('Yo');
      if (user) {
        const botGuilds = await this.discordService.getDiscordGuilds();
        const filteredGuilds = filterMutualGuilds(request.user.guilds, botGuilds);
        return response.send({ ...user, guilds: filteredGuilds });
      } else response.status(HttpStatus.UNAUTHORIZED).send({ msg: 'Unauthorized' });
  }
  
  @Get('discord')
  @UseGuards(DiscordLoginGuard)
  public OAuth2Discord() {}

  @Get('discord/redirect')
  @UseGuards(DiscordLoginGuard)
  public OAuth2DiscordRedirect(@Req() request: Request, @Res() response: Response) {
    response.redirect('http://localhost:3000/menu');
  }
}

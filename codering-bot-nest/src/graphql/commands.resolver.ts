import {
  Args,
  Mutation,
  Query,
  Resolver,
  GqlExecutionContext,
} from '@nestjs/graphql';
import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { DiscordService } from 'src/discord/services/discord/discord.service';

const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);

@Resolver('Commands')
export class CommandResolver {
  constructor(private discord: DiscordService) {}

  @Mutation()
  async createCommand(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('type') type: string,
    @Args('enabled') enabled: boolean,
  ) {
    return this.discord.createCommand(name, description, type, enabled);
  }

  @Mutation()
  async updateCommandByName(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('type') type: string,
    @Args('enabled') enabled: boolean,
  ) {
    
    return this.discord.updateCommand(name, { description, type, enabled });
  }

}

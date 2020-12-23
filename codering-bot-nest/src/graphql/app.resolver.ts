import { Args, Mutation, Query, Resolver, Subscription, GqlExecutionContext } from '@nestjs/graphql';
import { ParseIntPipe, createParamDecorator, UseGuards, ExecutionContext } from '@nestjs/common';
import User from 'src/auth/interfaces/User';
import { AuthenticatedGuard } from 'src/auth/guards/auth.guard';
import { GraphQLAuthGuard } from 'src/auth/guards/graphql-auth.guard';


const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
);

@Resolver('User')
export class UserResolver {

  @Query('getUserDetails')
  @UseGuards(GraphQLAuthGuard)
  async getUserDetails(@CurrentUser() user: User) {
    return user;
  }
}
import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';
@Injectable()
export class GraphQLAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
}

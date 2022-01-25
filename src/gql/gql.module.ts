import { Module } from '@nestjs/common';
import { GqlService } from './gql.service';
import { GqlResolver } from './gql.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/test.schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    })
  ],
  providers: [GqlResolver, GqlService]
})
export class GqlModule {}

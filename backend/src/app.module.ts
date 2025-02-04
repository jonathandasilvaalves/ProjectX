import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';

import { DatabaseModule } from './database/database.module';
import { ApolloDriver } from '@nestjs/apollo';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { AuthResolver } from './auth/auth.resolver';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    })
  ],
  controllers: [],
  providers: [AppService, UserResolver, UserService, AuthResolver],
})
export class AppModule {}

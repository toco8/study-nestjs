import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join, Sql } from '@prisma/client/runtime';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsResolver } from './posts/posts.resolver';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostsResolver],
})
export class AppModule {}

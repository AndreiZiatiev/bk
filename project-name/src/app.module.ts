import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { UserslistModule } from 'src/users-list/userslist/userslist.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserslistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserslistResolver } from './userslist.resolver';
import { UserslistService } from './userslist.service';

@Module({
  providers: [UserslistResolver, UserslistService]
})
export class UserslistModule {}

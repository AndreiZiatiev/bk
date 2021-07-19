import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../DTO/user';
import { UpdateUserInput } from '../../INPUT/update-user.input';
import { UserslistService } from './userslist.service';
import { CreateUserInput } from '../../DTO/input.type';
import { GetUsersArgs } from 'src/DTO/users.args';
import { GetUserArgs } from 'src/DTO/user.args';


@Resolver(User)
export class UserslistResolver {
    constructor(private readonly usersService: UserslistService) {}

    @Query(() => User)
    getUser(@Args('userId') userId: string){
        return this.usersService.getUser(userId);
    }
    @Query(()=>[User])
    getUsers(){
        return this.usersService.getUsers()
    }
    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User {
        return this.usersService.createUser(createUserData);
    }

}


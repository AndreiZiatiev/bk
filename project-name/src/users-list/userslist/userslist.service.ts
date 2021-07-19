import { Injectable } from '@nestjs/common';
import { GetUserArgs } from '../../DTO/user.args';
import { GetUsersArgs } from '../../DTO/users.args';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from '../../INPUT/update-user.input';
import { UserNum,USERS } from '../../CONSTS/users';
import { CreateUserInput } from '../../DTO/input.type';
@Injectable()
export class UserslistService {
    private users: UserNum[] = [];

   
    public getUsers(){
        const users = of(USERS)
        return users
    }
    public getUser(userId:string): UserNum {
        return this.users.find(user => user.userId === userId);
    }
    
    public createUser(createUserData: CreateUserInput): UserNum {
        const user: UserNum = {
            userId: uuidv4(),
            ...createUserData
        }
        this.users.push(user);
        return user;
    }
}


import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
    @Field()
    email: string;
    @Field()
    userId: string;
    @Field()
    gender: string;
    @Field()
    name: string;
}
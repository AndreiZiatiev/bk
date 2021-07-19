
  
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    id: number;

    @Field({ nullable: true })
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @Field({ nullable: true })
    @IsOptional()
    isSubscribed?: boolean;
}
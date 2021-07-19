
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    userId: string;

    @Field()
    gender: string;

   

  

   
}

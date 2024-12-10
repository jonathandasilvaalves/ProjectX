import { Field, InputType }  from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
    @Field()
    @IsString()
    @IsNotEmpty({message: 'Invalid characters!'})
    name: string;

    @Field()
    @IsEmail()
    @IsNotEmpty({message: 'Invalid E-mail!'})
    email: string;
}
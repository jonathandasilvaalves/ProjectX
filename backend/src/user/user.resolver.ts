import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { User } from './user.module';
import { UserService } from './user.service';
import { CreateUserInput } from './inputs/create-user-input';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => [User])
    users() {
        return this.userService.listAllUsers();
    }

    @Mutation(() => User)
    createUser(@Args('data') data: CreateUserInput) {
        return this.userService.createUser(data);
    }
}

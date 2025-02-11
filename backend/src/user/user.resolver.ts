import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { User } from './user.module';
import { UserService } from './user.service';
import { CreateUserInput } from './inputs/create-user-input';
import { UpdateUserInput } from './inputs/update-user-input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth-guard';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => [User])
    @UseGuards(GqlAuthGuard)
    users() {
        return this.userService.listAllUsers();
    }

    @Mutation(() => User)
    createUser(@Args('data') data: CreateUserInput) {
        return this.userService.createUser(data);
    }

    @Mutation(() => User)
    @UseGuards(GqlAuthGuard)
    updateUser(
        @Args('id') id: string,
        @Args('data') data: UpdateUserInput) {
        return this.userService.updateUser(id, data);
    }
}

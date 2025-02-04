import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const token = await this.authService.login(user);
    return token.access_token;
  }
}
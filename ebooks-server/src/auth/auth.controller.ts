import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() user: UserDto) {
    return this.authService.createUsers(user);
  }

  @Post('signin')
  signIn() {
    return 'word';
  }
}

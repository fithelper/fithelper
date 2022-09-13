import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto';
import { AuthService } from './service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signin')
  signinLocal(@Body() auth: AuthDto) {
    return this.authService.signinLocal(auth);
  }

  @Post('local/signup')
  signupLocal(@Body() auth: AuthDto) {
    return this.authService.signupLocal(auth);
  }
}

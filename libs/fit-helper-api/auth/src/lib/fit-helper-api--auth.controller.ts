import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto';
import { FitHelperApiAuthService } from './fit-helper-api--auth.service';

@Controller('auth')
export class FitHelperApiAuthController {
  constructor(private fitHelperApiAuthService: FitHelperApiAuthService) {}

  @Post('local/signin')
  signinLocal(@Body() auth: AuthDto) {
    return this.fitHelperApiAuthService.signinLocal(auth);
  }

  @Post('local/signup')
  signupLocal(@Body() auth: AuthDto) {
    return this.fitHelperApiAuthService.signupLocal(auth);
  }
}

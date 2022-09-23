import { Users } from '@fithelper/fit-helper-api//users';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FitHelperApiAuthController } from './fit-helper-api--auth.controller';
import { FitHelperApiAuthService } from './fit-helper-api--auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [
    JwtModule.register({
      secret: 'touch-my-tralalala',
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [FitHelperApiAuthController],
  providers: [FitHelperApiAuthService, JwtStrategy],
  exports: [FitHelperApiAuthService],
})
export class FitHelperApiAuthModule {}

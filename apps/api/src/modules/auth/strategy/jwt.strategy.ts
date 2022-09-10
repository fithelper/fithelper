import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, //change in prod
      secretOrKey: 'touch-my-tralalala', //move in env
    });
  }

  //add user in req
  async validate(payload: any) {
    return payload;
    // return { userId: payload.sub, username: payload.username };
  }
}

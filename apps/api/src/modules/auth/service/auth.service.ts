import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '@fithelper/api-interfaces';
import { AuthDto } from '../dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private jwtService: JwtService
  ) {}

  async userFind({ email, password }: { email: string; password: string }) {
    const user = await this.userRepository.findOneBy({ email: email });
    if (!user) {
      throw new UnauthorizedException('User does not exist !');
    }

    const passwordDecrypt = bcrypt.compare(
      user.password,
      password,
      function (err, result) {
        console.log(result);

        console.log(err);
        return result;
      }
    );

    if (passwordDecrypt) {
      throw new UnauthorizedException('credential incorrect !');
    }

    return user;
  }

  async signinLocal(auth: AuthDto) {
    const user = await this.userFind(auth);
    return this.signUser(user.id, user.password, 'user');
  }

  signUser(userId: string, email: string, type: string) {
    return this.jwtService.sign({ sub: userId, email, claim: type });
  }

  signupLocal(auth: AuthDto) {
    const newUser = this.userRepository.create(auth);
    return this.userRepository.save(newUser);
  }
}

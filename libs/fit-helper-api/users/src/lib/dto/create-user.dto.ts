import { IsString } from 'class-validator';
import { Users } from '../entities/users.entity';

export class CreateUserDto implements Partial<Users> {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

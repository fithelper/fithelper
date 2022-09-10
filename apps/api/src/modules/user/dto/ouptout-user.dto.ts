import { OmitType } from '@nestjs/swagger';
import { Users } from '../entities/users.entity';

export class UsersOutputDto extends OmitType(Users, []) {}

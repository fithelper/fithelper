import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersOutputDto } from '../dto/ouptout-user.dto';
import { Users } from '../entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private UserRepository: Repository<Users>
  ) {}

  //TODO: dto hash password
  create(user: CreateUserDto): Promise<UsersOutputDto> {
    const newUser = this.UserRepository.create(user);
    return this.UserRepository.save(newUser);
  }

  findOne(id: string): Promise<Users> | null {
    return this.UserRepository.findOneBy({ id });
  }

  findAll(): Promise<Users[]> {
    return this.UserRepository.find();
  }

  //TODO: dto
  async update(id: string, attrs: Partial<Users>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    const newUser = {
      ...user,
      ...attrs,
    };

    return this.UserRepository.save(newUser);
  }

  async remove(id: string): Promise<Users> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.UserRepository.remove(user);
  }

  async softRemove(id: string): Promise<Users> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.UserRepository.softRemove(user);
  }
}

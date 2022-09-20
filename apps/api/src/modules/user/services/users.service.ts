import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUserDto,
  UsersOutputDto,
  Users,
} from '@fithelper/api-interfaces';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>
  ) {}

  create(user: CreateUserDto): Promise<UsersOutputDto> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  findOne(id: string): Promise<Users> | null {
    return this.userRepository.findOne({
      where: { id },
      relations: ['weight'],
    });
  }

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
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

    return this.userRepository.save(newUser);
  }

  async remove(id: string): Promise<Users> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.userRepository.remove(user);
  }

  async softRemove(id: string): Promise<Users> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.userRepository.softRemove(user);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { concat } from 'rxjs';
import { Repository } from 'typeorm';
import { Users } from '../../user/entities/users.entity';
import { CreateWeightDto } from '../dto/create-weight.dto';
import { WeightOutputDto } from '../dto/output-weight.dto';
import { UpdateWeightDto } from '../dto/update-weight.dto';
import { Weight } from '../entities/weights.entity';

@Injectable()
export class WeightService {
  constructor(
    @InjectRepository(Weight)
    private weightRepository: Repository<Weight>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>
  ) {}

  async fetchAllByUser(userId: string): Promise<WeightOutputDto[]> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['weight'],
    });

    if (!user) {
      throw new NotFoundException('user not found ! ');
    }
    return user.weight ?? []
  }

  async create(weight: CreateWeightDto, id: string): Promise<WeightOutputDto> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('user not found ! ');
    }
    const newWeight = this.weightRepository.create(weight);
    newWeight.user = user;
    // const weights = user.weight ? user.weight : [];

    const saveWeight = await this.weightRepository.save(newWeight);
    // await this.userRepository.save({
    //   ...user,
    //   weight: weights.concat(newWeight),
    // });
    return saveWeight;
  }

  async update(
    weightId: string,
    weight: UpdateWeightDto,
    id: string
  ): Promise<WeightOutputDto> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('user not found ! ');
    }
    // console.log('user weight', user);
    const weightdb = await this.weightRepository.findOne({
      where: { id: weightId },
      relations: ['user'],
    });
    if (!weightdb) {
      throw new NotFoundException('weight not found');
    }

    if (weightdb?.user.id !== user.id) {
      throw new NotFoundException('user weight and weight not match');
    }

    const newWeight = {
      ...weightdb,
      ...weight,
    };
    return this.weightRepository.save(newWeight);
  }

  async softRemove(id: string, userId: string): Promise<WeightOutputDto> {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new NotFoundException('user not found ! ');
    }
    const weight = await this.weightRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!weight) {
      throw new NotFoundException('weight not found');
    }
    if (weight.user.id !== user.id) {
      throw new NotFoundException('user weight and weight not match');
    }
    return this.weightRepository.softRemove(weight);
  }
}

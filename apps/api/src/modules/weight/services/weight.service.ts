import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { concat } from 'rxjs';
import { Repository } from 'typeorm';
import { Users } from '../../user/entities/users.entity';
import { CreateWeightDto } from '../dto/create-weight.dto';
import { WeightOutputDto } from '../dto/output-weight.dto';
import { Weight } from '../entities/weights.entity';

@Injectable()
export class WeightService {
  constructor(
    @InjectRepository(Weight)
    private weightRepository: Repository<Weight>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>
  ) {}

  async create(weight: CreateWeightDto, id: string): Promise<WeightOutputDto> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('user not found ! ');
    }
    const newWeight = this.weightRepository.create(weight);
    newWeight.user = user
    // const weights = user.weight ? user.weight : [];

    const saveWeight = await this.weightRepository.save(newWeight);
    // await this.userRepository.save({
    //   ...user,
    //   weight: weights.concat(newWeight),
    // });
    return saveWeight;
  }
}

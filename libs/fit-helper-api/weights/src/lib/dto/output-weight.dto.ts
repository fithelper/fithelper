import { OmitType } from '@nestjs/swagger';
import { Weight } from '../entities/weights.entity';

export class WeightOutputDto extends OmitType(Weight, []) {}
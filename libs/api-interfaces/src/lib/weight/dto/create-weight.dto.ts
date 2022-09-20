import { IsNumber } from 'class-validator';
import { Weight } from '../entities/weights.entity';

export class CreateWeightDto implements Partial<Weight> {
  @IsNumber()
  weight?: number;
}

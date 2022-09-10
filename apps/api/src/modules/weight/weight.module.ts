import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weight } from './entities/weights.entity';
import { WeightService } from './services/weight.service';
import { WeightController } from './weight.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Weight])],
  providers: [WeightService],
  controllers: [WeightController],
})
export class WeightModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '@fithelper/api-interfaces';
import { Weight } from '@fithelper/api-interfaces';
import { WeightService } from './services/weight.service';
import { WeightController } from './weight.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Weight,Users])],
  providers: [WeightService],
  controllers: [WeightController],
})
export class WeightModule {}

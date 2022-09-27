import {
  FitHelperApiUsersModule,
  Users,
} from '@fithelper/fit-helper-api//users';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weight } from './entities/weights.entity';
import { FitHelperApiWeightsController } from './fit-helper-api--weights.controller';
import { FitHelperApiWeightsService } from './fit-helper-api--weights.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Weight, Users]),
    forwardRef(() => FitHelperApiUsersModule),
  ],
  controllers: [FitHelperApiWeightsController],
  providers: [FitHelperApiWeightsService],
})
export class FitHelperApiWeightsModule {}

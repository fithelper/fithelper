import { FitHelperApiWeightsModule, Weight } from '@fithelper/fit-helper-api//weights';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { FitHelperApiUsersController } from './fit-helper-api--users.controller';
import { FitHelperApiUsersService } from './fit-helper-api--users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Weight]),
    forwardRef(() => FitHelperApiWeightsModule)
  ],
  controllers: [FitHelperApiUsersController],
  providers: [FitHelperApiUsersService],
  exports: [FitHelperApiUsersService],
})
export class FitHelperApiUsersModule {}

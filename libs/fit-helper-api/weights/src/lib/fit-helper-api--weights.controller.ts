import { GetCurrentUserById } from '@fithelper/fit-helper-api//auth';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { CreateWeightDto, UpdateWeightDto, WeightOutputDto } from './dto';
import { FitHelperApiWeightsService } from './fit-helper-api--weights.service';

@Controller('weights')
export class FitHelperApiWeightsController {
  constructor(private fitHelperApiWeightsService: FitHelperApiWeightsService) {}
  @ApiOperation({ summary: 'Create weight' })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() weight: CreateWeightDto,
    @GetCurrentUserById() id: string
  ): Promise<WeightOutputDto> {
    return this.fitHelperApiWeightsService.create(weight, id);
  }

  @ApiOperation({ summary: 'find all weight by user' })
  @Get()
  @UseGuards(AuthGuard('jwt'))
  fetchAll(@GetCurrentUserById() userId: string): Promise<WeightOutputDto> {
    return this.fitHelperApiWeightsService.fetchAllByUser(userId);
  }

  @ApiOperation({ summary: 'update weight' })
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') weightId: string,
    @Body() weight: UpdateWeightDto,
    @GetCurrentUserById() id: string
  ): Promise<WeightOutputDto> {
    return this.fitHelperApiWeightsService.update(weightId, weight, id);
  }

  @ApiOperation({ summary: 'Soft delete weight' })
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  softRemove(
    @Param('id') id: string,
    @GetCurrentUserById() userId: string
  ): Promise<WeightOutputDto> {
    return this.fitHelperApiWeightsService.softRemove(id, userId);
  }
}

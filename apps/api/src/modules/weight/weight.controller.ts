import { Body, Controller, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { GetCurrentUserById } from '../../utils';
import { CreateWeightDto } from './dto/create-weight.dto';
import { WeightOutputDto } from './dto/output-weight.dto';
import { UpdateWeightDto } from './dto/update-weight.dto';
import { WeightService } from './services/weight.service';

@Controller('weight')
export class WeightController {
  constructor(private weightService: WeightService) {}

  @ApiOperation({ summary: 'Create weight' })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() weight: CreateWeightDto,
    @GetCurrentUserById() id: string
  ): Promise<WeightOutputDto> {
    return this.weightService.create(weight, id);
  }

  @ApiOperation({ summary: 'update weight' })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') weightId : string,
    @Body() weight: UpdateWeightDto,
    @GetCurrentUserById() id: string
  ): Promise<WeightOutputDto> {
    return this.weightService.update(weightId,weight, id);
  }
}

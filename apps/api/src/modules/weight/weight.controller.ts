import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { GetCurrentUserById } from '../../utils';
import { CreateWeightDto } from './dto/create-weight.dto';
import { WeightOutputDto } from './dto/output-weight.dto';
import { WeightService } from './services/weight.service';

@Controller('weight')
export class WeightController {
  constructor(private weightService: WeightService) { }
  
  @ApiOperation({ summary: 'Create weight' })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() weight: CreateWeightDto,@GetCurrentUserById() id: string ): Promise<WeightOutputDto> {
    console.log(id);
    return this.weightService.create(weight,id);
  }
}

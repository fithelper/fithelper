import { GetCurrentUserById } from '@fithelper/fit-helper-api//auth';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto, UsersOutputDto } from './dto';
import { Users } from './entities/users.entity';
import { FitHelperApiUsersService } from './fit-helper-api--users.service';

@Controller('users')
export class FitHelperApiUsersController {
  constructor(private fitHelperApiUsersService: FitHelperApiUsersService) {}
  @ApiOperation({ summary: 'Create new User' })
  @Post()
  create(@Body() user: CreateUserDto): Promise<UsersOutputDto> {
    return this.fitHelperApiUsersService.create(user);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  findAll(): Promise<Users[]> {
    return this.fitHelperApiUsersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'all user by id' })
  @Get('/current')
  findUserById(@GetCurrentUserById() id: string): Promise<UsersOutputDto> {
    return this.fitHelperApiUsersService.findOne(id);
  }
}

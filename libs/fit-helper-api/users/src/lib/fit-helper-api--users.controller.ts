import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto, UsersOutputDto } from './dto';
import { Users } from './entities/users.entity';
import { FitHelperApiUsersService } from './fit-helper-api--users.service';

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentUserById = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user?.sub;
  }
);

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

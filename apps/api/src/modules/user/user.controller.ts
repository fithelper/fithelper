import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersOutputDto } from './dto/ouptout-user.dto';
import { Users } from './entities/users.entity';
import { UserService } from './services/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'Create new User' })
  @Post()
  create(@Body() user: CreateUserDto): Promise<UsersOutputDto> {
    return this.userService.create(user);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }
}

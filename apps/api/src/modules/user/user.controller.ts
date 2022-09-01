import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Users } from './entities/users.entity';
import { UserService } from './services/books.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'Create new User' })
  @Post()
  create(@Body() user: Partial<Users>): Promise<Users> {
    return this.create(user);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }
}

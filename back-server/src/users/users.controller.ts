import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: UserDto) {
    return this.usersService.createUser(data);
  }

  @Get()
  async findAll() {
    return await this.usersService.getAllUsers();
  }

  @Post('login')
  async login(@Body() credentials: UserLoginDto) {
    return await this.usersService.login(credentials);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.usersService.getUserById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UserDto) {
    return this.usersService.updateUser(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}

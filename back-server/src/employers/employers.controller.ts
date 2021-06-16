import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/users/auth/jwt-auth.guard';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { EmployersService } from './employers.service';

@Controller('employers')
export class EmployersController {
  constructor(private readonly employersService: EmployersService) {}

  @Post()
  async create(@Body() data: CreateEmployerDto) {
    return this.employersService.create(data);
  }

  @Get()
  async findAll() {
    return this.employersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.employersService.findOne(id);
  }

  @Get(':id/offers')
  async getOffers(@Param('id') id: number) {
    return this.employersService.getOffers(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: CreateEmployerDto) {
    return this.employersService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.employersService.remove(id);
  }
}

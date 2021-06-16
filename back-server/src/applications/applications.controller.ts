import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities/application.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  async create(@Body() data: CreateApplicationDto): Promise<any> {
    return this.applicationsService.create(data);
  }

  @Get()
  async findAll(): Promise<Application[]> {
    return this.applicationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Application> {
    return this.applicationsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.applicationsService.remove(id);
  }
}

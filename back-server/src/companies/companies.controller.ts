import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/students/students.service';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('companies')
export class CompaniesController {
  path = require('path');

  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() data: CreateCompanyDto) {
    return this.companiesService.create(data);
  }

  @Get()
  async findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.companiesService.findOne(id);
  }

  @Get(':id/offers')
  async getCompanyOffers(@Param('id') id: number) {
    return this.companiesService.findOffers(id);
  }

  //Note: This destination starts at the root path of the project, not the src folder!
  //this is a multi-form data request
  @Post(':id/logo')
  @UseInterceptors(
    FileInterceptor('logo', {
      storage: diskStorage({
        destination: './uploads/logos',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadLogo(
    @Param('id') id: number,
    @UploadedFile() pic: Express.Multer.File,
  ) {
    await this.companiesService.setLogo(id, `${pic.path}`);
  }

  @Get(':id/logo')
  async getLogoByCompanyId(@Param('id') id, @Res() res) {
    const logo = await this.companiesService.getLogo(id);
    return res.sendFile(this.path.resolve(logo));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: CreateCompanyDto) {
    return this.companiesService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.companiesService.remove(id);
  }
}

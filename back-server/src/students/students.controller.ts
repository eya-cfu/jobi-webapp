import { Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateStudentDto } from './dto/create-student.dto';
import {
  cvFileFilter,
  editFileName,
  imageFileFilter,
  StudentsService,
} from './students.service';

@Controller('students')
export class StudentsController {
  path = require('path');
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() data: CreateStudentDto) {
    return this.studentsService.create(data);
  }

  //Note: This destination starts at the root path of the project, not the src folder!
  //this is a multi-form data request
  @Post(':id/pic')
  @UseInterceptors(
    FileInterceptor('picture', {
      storage: diskStorage({
        destination: './uploads/pics',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadPic(
    @Param('id') id: number,
    @UploadedFile() pic: Express.Multer.File,
  ) {
    await this.studentsService.setPic(id, `${pic.path}`);
  }

  @Post(':id/cv')
  @UseInterceptors(
    FileInterceptor('cv', {
      storage: diskStorage({
        destination: './uploads/cvs',
        filename: editFileName,
      }),
      fileFilter: cvFileFilter,
    }),
  )
  async uploadCv(
    @UploadedFile() cv: Express.Multer.File,
    @Param('id') id: number,
  ) {
    this.studentsService.setCV(id, `${cv.path}`);
  }

  @Get(':id/cv')
  async getCvByStudentId(@Param('id') id, @Res() res) {
    const cv = await this.studentsService.getCV(id);
    return res.sendFile(this.path.resolve(cv));
  }

  @Get(':id/pic')
  async getPicByStudentId(@Param('id') id, @Res() res) {
    const pic = await this.studentsService.getPic(id);
    return res.sendFile(this.path.resolve(pic));
  }

  @Get(':id/applications')
  async getStudentApps(@Param('id') id: number) {
    return this.studentsService.findApps(id);
  }

  @Get()
  async findAll() {
    return await this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.studentsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: CreateStudentDto) {
    return this.studentsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }
}

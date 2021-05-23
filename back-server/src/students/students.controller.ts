import { Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { StudentDto } from './dto/student.dto';
import {
  editFileName,
  imageFileFilter,
  StudentsService,
} from './students.service';

@Controller('students')
export class StudentsController {
  path = require('path');
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() data: StudentDto) {
    return this.studentsService.create(data);
  }

  //Note: This destination starts at the root path of the project, not the src folder!
  @Post(':id/pic')
  @UseInterceptors(
    FileInterceptor('picture', {
      storage: diskStorage({
        destination: '../uploads/pics',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadPic(
    @Param('id') id: number,
    @UploadedFile() pic: Express.Multer.File,
  ) {
    this.studentsService.setPic(id, `${pic.path}`);
  }

  @Post(':id/cv')
  @UseInterceptors(
    FileInterceptor('cv', {
      storage: diskStorage({
        destination: '../uploads/cvs',
        filename: editFileName,
      }),
    }),
  )
  uploadCv(@UploadedFile() cv: Express.Multer.File, @Param('id') id: number) {
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

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }
  //GOTTA REVISE THIS, CREATE NEW UPDATE DTO FOR PATCH
  @Patch(':id')
  update(@Param('id') id: number, @Body() data: StudentDto) {
    return this.studentsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}

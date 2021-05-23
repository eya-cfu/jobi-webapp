import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { extname } from 'path';
import { Repository } from 'typeorm';
import { StudentDto } from './dto/student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  async create(data: StudentDto) {
    const student = this.studentRepo.create(data);
    await this.studentRepo.save(student);
  }

  async setPic(id: number, path: string) {
    this.studentRepo.update(id, { picture: path });
  }

  async setCV(id: number, path: string) {
    this.studentRepo.update(id, { cv: path });
  }

  async getCV(id: number): Promise<string> {
    const st = await this.studentRepo.findOne(id);
    if (!st) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return st.cv;
  }

  async getPic(id: number): Promise<string> {
    const st = await this.studentRepo.findOne(id);
    if (!st) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return st.picture;
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, data: StudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};
export const cvFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(pdf)$/)) {
    return callback(new Error('Only PDF files are allowed!'), false);
  }
  callback(null, true);
};

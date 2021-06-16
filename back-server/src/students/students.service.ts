import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { extname } from 'path';
import { Application } from 'src/applications/entities/application.entity';
import { Role, User } from 'src/users/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
    @InjectRepository(Application)
    private appRepo: Repository<Application>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(data: CreateStudentDto) {
    const student = {
      user: data.userId,
      dateOfBirth: data.dateOfBirth,
      driverLicense: data.driverLicense,
      education: data.education,
      linkedin: data.linkedin,
      location: data.location,
      school: data.school,
      languages: data.languages.toString(),
    };
    const st = this.studentRepo.create(student);
    console.log(st);
    await this.studentRepo.save(st);
    await this.userRepo.update(data.userId, { role: Role.Student });
  }

  async setPic(id: number, path: string): Promise<UpdateResult> {
    return await this.studentRepo.update(id, { picture: path });
  }

  async setCV(id: number, path: string): Promise<UpdateResult> {
    return await this.studentRepo.update(id, { cv: path });
  }

  async getCV(id: number): Promise<string> {
    const st = await this.studentRepo.findOne(id);
    if (!st) {
      throw new HttpException('Student does not exist', HttpStatus.NOT_FOUND);
    }
    return st.cv;
  }

  async getPic(id: number): Promise<string> {
    const st = await this.studentRepo.findOne(id);
    if (!st) {
      throw new HttpException('Student does not exist', HttpStatus.NOT_FOUND);
    }
    return st.picture;
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepo.find();
  }

  async findOne(id: number): Promise<Student> {
    const data = await this.studentRepo.findOne(id);
    if (!data) {
      throw new HttpException('Student does not exist', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async findApps(stId: number): Promise<Application[]> {
    return this.appRepo.find({ where: { student: { user: stId } } });
  }

  async update(id: number, data: CreateStudentDto): Promise<UpdateResult> {
    const student = {
      dateOfBirth: data.dateOfBirth,
      driverLicense: data.driverLicense,
      education: data.education,
      linkedin: data.linkedin,
      location: data.location,
      school: data.school,
      languages: data.languages.toString(),
    };
    return await this.studentRepo.update(id, student);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.studentRepo.delete(id);
  }
}
export const editFileName = (req, file, callback) => {
  const fileExtName = extname(file.originalname);
  const randomName = Array(7)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${randomName}${fileExtName}`);
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

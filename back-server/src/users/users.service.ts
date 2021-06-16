import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserLoginDto } from './dto/user-login.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  bcrypt = require('bcrypt');
  saltRounds = 8;

  async createUser(data: UserDto) {
    const { email } = data;
    let user = await this.userRepo.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = this.userRepo.create(data);
    user.salt = await this.bcrypt.genSalt(this.saltRounds);
    user.password = await this.bcrypt.hash(user.password, user.salt);
    await this.userRepo.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async login(credentials: UserLoginDto) {
    const user = await this.userRepo.findOne({
      where: { email: credentials.email },
      select: ['email', 'password', 'salt', 'id', 'role'],
    });
    if (!user) throw new NotFoundException('wrong credentials');
    const hashedPwd = await this.bcrypt.hash(credentials.password, user.salt);
    if (hashedPwd === user.password) {
      const payload = {
        userId: user.id,
        email: user.email,
        role: user.role,
      };
      console.log(payload);
      const accessToken = this.jwtService.sign(payload);
      return {
        // eslint-disable-next-line prettier/prettier
        'access_token': accessToken,
      };
    } else {
      throw new NotFoundException('wrong credentials');
    }
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async updateUser(id: number, data: UserDto): Promise<UpdateResult> {
    const user = await this.userRepo.findOne({
      where: { id },
      select: ['id', 'salt'],
    });
    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    const newUser = await this.userRepo.create(data);
    if (data.password)
      newUser.password = await this.bcrypt.hash(data.password, user.salt);
    return await this.userRepo.update(id, newUser);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return await this.userRepo.delete(id);
  }
}

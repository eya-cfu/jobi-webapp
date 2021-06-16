import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/companies/entities/company.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { Role, User } from 'src/users/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { Employer } from './entities/employer.entity';

@Injectable()
export class EmployersService {
  constructor(
    @InjectRepository(Employer)
    private empRepo: Repository<Employer>,
    @InjectRepository(Company)
    private compRepo: Repository<Company>,
    @InjectRepository(Offer)
    private offerRepo: Repository<Offer>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(data: CreateEmployerDto) {
    const emp = {
      user: data.userId,
      company: data.companyId,
    };
    await this.empRepo.save(emp);
    await this.userRepo.update(data.userId, { role: Role.Employer });
  }

  async findAll(): Promise<Employer[]> {
    return await this.empRepo.find();
  }

  async findOne(id: number): Promise<Employer> {
    return await this.empRepo.findOne(id);
  }

  async update(id: number, data: CreateEmployerDto): Promise<UpdateResult> {
    const emp = {
      company: data.companyId,
    };
    return await this.empRepo.update(id, emp);
  }

  async getOffers(id: number): Promise<Offer[]> {
    return this.offerRepo.find({ where: { employer: id } });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.empRepo.delete(id);
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from 'src/offers/entities/offer.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyRepo: Repository<Company>,
    @InjectRepository(Offer)
    private offerRepo: Repository<Offer>,
  ) {}

  async create(data: CreateCompanyDto) {
    await this.companyRepo.save(data);
  }

  async findAll(): Promise<Company[]> {
    return await this.companyRepo.find();
  }

  async findOne(id: number): Promise<Company> {
    return await this.companyRepo.findOne(id);
  }

  async update(id: number, data: CreateCompanyDto): Promise<UpdateResult> {
    return await this.companyRepo.update(id, data);
  }

  async setLogo(id: number, path: string): Promise<UpdateResult> {
    return await this.companyRepo.update(id, { logo: path });
  }

  async getLogo(id: number): Promise<string> {
    const c = await this.companyRepo.findOne(id);
    if (!c) {
      throw new HttpException('Company does not exist', HttpStatus.NOT_FOUND);
    }
    return c.logo;
  }

  async findOffers(id: number): Promise<Offer[]> {
    return await this.offerRepo.find({ where: { company: id } });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.companyRepo.delete(id);
  }
}

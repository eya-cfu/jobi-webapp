import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { EmpType, Offer, Status } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offerRepo: Repository<Offer>,
  ) {}

  async create(data: CreateOfferDto): Promise<any> {
    const offer = {
      title: data.title,

      datePosted: data.datePosted,

      status: data.status,

      employmentType: data.employmentType,

      category: data.category,

      location: data.location,

      salary: data.salary,

      description: data.description,

      requirements: data.requirements,

      responsibilities: data.responsibilities,

      about: data.about,

      hoursPerWeek: data.hoursPerWeek,

      languages: data.languages,

      company: data.companyId,

      employer: data.employerId,
    };
    const o = this.offerRepo.create(offer);
    return await this.offerRepo.save(o);
  }

  async findAll(): Promise<Offer[]> {
    return await this.offerRepo.find({ status: Status.OPEN });
  }

  async findFiltered(emp: string, cat: string, loc: string): Promise<Offer[]> {
    const params: DeepPartial<Offer> = {};
    if (emp) params.employmentType = EmpType[emp.toUpperCase()];
    if (cat) params.category = cat;
    if (loc) params.location = loc;
    params.status = Status.OPEN;
    return await this.offerRepo.find(params);
  }

  async findOne(id: number): Promise<Offer> {
    const data = await this.offerRepo.findOne(id);
    if (!data) {
      throw new HttpException('offer does not exist', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, data: UpdateOfferDto): Promise<UpdateResult> {
    return await this.offerRepo.update(id, data);
  }

  async remove(id: number): Promise<UpdateResult> {
    return await this.offerRepo.update(id, { status: Status.CLOSED });
  }
}

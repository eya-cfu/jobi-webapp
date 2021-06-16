import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { Offer } from './entities/offer.entity';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  async create(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.create(createOfferDto);
  }

  @Get()
  async findAll() {
    return this.offersService.findAll();
  }

  @Get('filter')
  async findFiltered(
    @Query('employmentType') emp: string,
    @Query('category') cat: string,
    @Query('location') loc: string,
  ): Promise<Offer[]> {
    return this.offersService.findFiltered(emp, cat, loc);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Offer> {
    return this.offersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UpdateOfferDto) {
    return this.offersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offersService.remove(+id);
  }
}

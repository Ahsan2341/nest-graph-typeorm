import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepo.save(createPropertyDto);
  }

  async findAll(filter) {
    const properties = await this.propertyRepo.find({
      where: { ...filter },
    });
    return properties;
  }

  async findOne(id: number) {
    const property = await this.propertyRepo.findOne({
      where: { id },
    });
    if (!property) {
      throw new NotFoundException('Property not found');
    }
    return property;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertyRepo.update({ id }, updatePropertyDto);
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}

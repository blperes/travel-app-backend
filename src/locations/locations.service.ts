import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';


@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>,
  ) {}

  create(dto: CreateLocationDto) {
    const location = this.locationsRepository.create(dto);
    return this.locationsRepository.save(location);
  }

  findAll() {
    return this.locationsRepository.find({ relations: ['pointsOfInterest', 'trip'] });
  }

  findOne(id: number) {
    return this.locationsRepository.findOne({
      where: { id },
      relations: ['pointsOfInterest', 'trip'],
    });
  }

  update(id: number, dto: UpdateLocationDto) {
    return this.locationsRepository.update(id, dto);
  }

  remove(id: number) {
    return this.locationsRepository.delete(id);
  }
}

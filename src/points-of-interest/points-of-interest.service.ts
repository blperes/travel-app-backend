import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PointOfInterest } from './point-of-interest.entity';
import { Repository } from 'typeorm';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { UpdatePointOfInterestDto } from './dto/update-point-of-interest.dto';

@Injectable()
export class PointsOfInterestService {
  constructor(
    @InjectRepository(PointOfInterest)
    private poiRepository: Repository<PointOfInterest>,
  ) {}

  create(dto: CreatePointOfInterestDto) {
    const poi = this.poiRepository.create(dto);
    return this.poiRepository.save(poi);
  }

  findAll() {
    return this.poiRepository.find({ relations: ['location', 'location.trip'] });
  }

  findOne(id: number) {
    return this.poiRepository.findOne({
      where: { id },
      relations: ['location', 'location.trip'],
    });
  }

  update(id: number, dto: UpdatePointOfInterestDto) {
    return this.poiRepository.update(id, dto);
  }

  remove(id: number) {
    return this.poiRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from './trip.entity';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,
  ) {
  }

  create(dto: CreateTripDto) {
    const trip = this.tripRepository.create(dto);
    return this.tripRepository.save(trip);
  }

  findAll() {
    return this.tripRepository.find({ relations: ['locations', 'locations.pointsOfInterest'] });
  }

  findOne(id: number) {
    return this.tripRepository.findOne({
      where: { id },
      relations: ['locations', 'locations.pointsOfInterest'],
    });
  }

  update(id: number, dto: UpdateTripDto) {
    return this.tripRepository.update(id, dto);
  }

  remove(id: number) {
    return this.tripRepository.delete(id);
  }

}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { PointsOfInterestModule } from '../points-of-interest/points-of-interest.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]),
    PointsOfInterestModule
  ],
  controllers: [LocationsController],
  providers: [LocationsService],
  exports: [LocationsService],
})
export class LocationsModule {}

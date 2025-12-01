import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsModule } from '../trips/trips.module';
import { LocationsModule } from '../locations/locations.module';
import { PointsOfInterestService } from '../points-of-interest/points-of-interest.service';
import { PointsOfInterestModule } from '../points-of-interest/points-of-interest.module';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

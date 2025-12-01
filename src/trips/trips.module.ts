import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip} from './trip.entity';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { LocationsModule} from '../locations/locations.module';

@Module({
  imports: [TypeOrmModule.forFeature([Trip]),
    LocationsModule
  ],
  controllers: [TripsController],
  providers: [TripsService],
  exports: [TripsService],
})
export class TripsModule {}

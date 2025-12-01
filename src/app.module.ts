import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Trip } from './trips/trip.entity';
import { Location } from './locations/location.entity';
import { PointOfInterest } from './points-of-interest/point-of-interest.entity';
import { UsersModule } from './users/users.module';
import { TripsModule } from './trips/trips.module';
import { LocationsModule } from './locations/locations.module';
import { PointsOfInterestModule } from './points-of-interest/points-of-interest.module';
import { join } from 'path';

declare const __dirname: string;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'bigastro1125',
      database: 'travel_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Trip, Location, PointOfInterest]),
    UsersModule,
    TripsModule,
    LocationsModule,
    PointsOfInterestModule,
  ],
})
export class AppModule {}

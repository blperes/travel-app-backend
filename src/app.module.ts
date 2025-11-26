import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Trip } from './trips/trip.entity';
import { Location } from './trips/location.entity';
import { PointOfInterest } from './trips/point-of-interest.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'bigastro1125',
      database: 'travel_db',
      entities: [User, Trip, Location, PointOfInterest],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Trip, Location, PointOfInterest]),
  ],
})
export class AppModule {}

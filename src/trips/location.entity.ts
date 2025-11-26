import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { Trip } from '../trips/trip.entity';
import { PointOfInterest } from '../trips/point-of-interest.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  order: number;

  @ManyToOne(() => Trip, trip => trip.locations, { nullable: false })
  trip: Trip;

  @OneToMany(() => PointOfInterest, poi => poi.location)
  points_of_interest: PointOfInterest[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
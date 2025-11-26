import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Location } from '../trips/location.entity';

export enum TripType {
  COMPLETED = 'completed',
  NEXT = 'next',
  WISHED = 'wished',
}

@Entity()
export class Trip {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: TripType,
  })
  type: TripType;

  @ManyToOne(() => User, user => user.trips, { nullable : false})
  user: User;

  @OneToMany(() => Location, location => location.trip)
  locations: Location[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Trip } from '../trips/trip.entity';

@Entity()

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  password_hash: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Trip, trip => trip.user)
  trips: Trip[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

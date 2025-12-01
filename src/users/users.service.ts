import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const password_hash = await bcrypt.hash(dto.password, 10);
    const user = this.usersRepository.create({
      ...dto,
      password_hash,
    });

    delete (user as any).password;

    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find({relations: ['trips']});
  }

  findOne(id: number) {
    return this.usersRepository.findOne({
      where: {id},
      relations: ['trips'],
    });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.usersRepository.update(id, dto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}

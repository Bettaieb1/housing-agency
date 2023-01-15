import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(user: Omit<User, 'id'>) {
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find({ relations: ['ownerHouses'] });
  }

  findOne(id: string) {
    return this.usersRepository.findOneByOrFail({
      id: id,
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id: id }, updateUserDto);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}

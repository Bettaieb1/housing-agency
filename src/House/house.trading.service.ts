import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { House } from './entities/house.entity';

@Injectable()
export class HouseTradingService {
  constructor(
    @InjectRepository(House)
    private houseRepo: Repository<House>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(hid: string, userEmail: string) {
    const user = await this.userRepo.findOneOrFail({
      where: { email: userEmail },
    });
    const house = await this.houseRepo.findOneOrFail({
      where: { id: hid },
      relations: ['owner'],
    });
    if (house.owner) {
      throw new UnauthorizedException('House already has an owner.');
    }

    house.owner = user;

    return this.houseRepo.save(house);
  }

  async remove(hid: string) {
    const house = await this.houseRepo.findOneOrFail({
      where: { id: hid },
    });

    house.owner = null;
    house.forSale = true;

    console.log(house);

    return this.houseRepo.save(house);
  }
}

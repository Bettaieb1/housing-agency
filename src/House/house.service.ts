import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { House } from './entities/house.entity';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House)
    private houseRepo: Repository<House>,
  ) {}
  create(createHouseDto: CreateHouseDto) {
    return this.houseRepo.save({ ...createHouseDto, markedForAdoption: true });
  }

  findAll() {
    return this.houseRepo.find();
  }

  findOne(uuid: string) {
    return this.houseRepo.findOneByOrFail({ id: uuid });
  }

  findByUser(uuid: string) {
    return this.houseRepo.find({ where: { owner: { id: uuid } } });
  }

  update(uuid: string, updateHouseDto: UpdateHouseDto) {
    return this.houseRepo.update({ id: uuid }, updateHouseDto);
  }

  remove(uuid: string) {
    return this.houseRepo.delete({ id: uuid });
  }
}

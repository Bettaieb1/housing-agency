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

  findOne(id: string) {
    return this.houseRepo.findOneByOrFail({ id: id });
  }

  findByUser(id: string) {
    return this.houseRepo.find({ where: { owner: { id: id } } });
  }

  update(id: string, updateHouseDto: UpdateHouseDto) {
    return this.houseRepo.update({ id: id }, updateHouseDto);
  }

  remove(id: string) {
    return this.houseRepo.delete({ id: id });
  }
}

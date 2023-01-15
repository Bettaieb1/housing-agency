import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { House } from './entities/house.entity';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get()
  findAll() {
    return this.houseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.houseService.findOne(id);
      return result;
    } catch {
      throw new NotFoundException();
    }
  }

  @Post()
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.houseService.create(createHouseDto);
  }

  @Patch(':is')
  update(@Param('id') id: string, @Body() updateHouseDto: UpdateHouseDto) {
    return this.houseService.update(id, updateHouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.houseService.remove(id);
  }
}

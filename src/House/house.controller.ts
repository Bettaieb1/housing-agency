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

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get()
  findAll() {
    return this.houseService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string) {
    try {
      const result = await this.houseService.findOne(uuid);
      return result;
    } catch {
      throw new NotFoundException();
    }
  }

  @Post()
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.houseService.create(createHouseDto);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateHouseDto: UpdateHouseDto) {
    return this.houseService.update(uuid, updateHouseDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.houseService.remove(uuid);
  }
}

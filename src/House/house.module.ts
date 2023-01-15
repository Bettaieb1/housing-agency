import { HouseTradingService } from './house.trading.service';
import { HouseTradingController } from './house.trading.controller';
import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from './entities/house.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([House, User])],
  controllers: [HouseController, HouseTradingController],
  providers: [HouseService, HouseTradingService],
})
export class HouseModule {}

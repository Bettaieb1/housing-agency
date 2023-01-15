import { HouseTradingService } from './house.trading.service';
import { Controller, Body, Post, Param, Delete } from '@nestjs/common';

@Controller('house/trading')
export class HouseTradingController {
  constructor(private readonly houseTradingService: HouseTradingService) {}

  @Post(':huuid')
  create(@Param('huuid') hid: string, @Body() userData: { userEmail: string }) {
    return this.houseTradingService.create(hid, userData.userEmail);
  }

  @Delete(':huuid')
  remove(@Param(':huuid') id: string) {
    return this.houseTradingService.remove(id);
  }
}

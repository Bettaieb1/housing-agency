import { HouseTradingService } from './house.trading.service';
import { Controller, Body, Post, Param, Delete } from '@nestjs/common';

@Controller('house/trading')
export class HouseTradingController {
  constructor(private readonly houseTradingService: HouseTradingService) {}

  @Post(':hid')
  create(@Param('hid') hid: string, @Body() userData: { userEmail: string }) {
    return this.houseTradingService.create(hid, userData.userEmail);
  }

  @Delete(':hid')
  remove(@Param(':hid') id: string) {
    return this.houseTradingService.remove(id);
  }
}

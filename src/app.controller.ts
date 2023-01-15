import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  health(): Record<string, string> {
    return { status: 'ok' };
  }
}

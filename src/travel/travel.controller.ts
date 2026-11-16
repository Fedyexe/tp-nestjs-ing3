import { Controller, Get, Post } from '@nestjs/common';
import { TravelService } from './travel.service';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Post()
  createTravel(): string {
    return '<Planifier un nouveau voyage ici>';
  }
}

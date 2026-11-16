import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TravelService } from './travel.service';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.travelService.findOne(id);
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Post()
  createTravel(): string {
    return '<Planifier un nouveau voyage ici>';
  }
}

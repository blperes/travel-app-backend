import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PointsOfInterestService } from './points-of-interest.service';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { UpdatePointOfInterestDto } from './dto/update-point-of-interest.dto';

@Controller('points-of-interest')
export class PointsOfInterestController {
  constructor(private readonly poiService: PointsOfInterestService) {}

  @Post()
  create(@Body() dto: CreatePointOfInterestDto) {
    return this.poiService.create(dto);
  }

  @Get()
  findAll() {
    return this.poiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.poiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePointOfInterestDto) {
    return this.poiService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.poiService.remove(id);
  }
}

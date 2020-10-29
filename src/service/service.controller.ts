import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

import { ServiceService } from './service.service';
import { CreateServiceDto, UpdateServiceDto } from './dto';

@Controller('services')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Post()
  public async create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @Get()
  public async findAll() {
    return this.serviceService.findAll();
  }

  @Get('/:id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    const service = await this.serviceService.findOne(id);
    if (!service) {
      throw new HttpException('SERVICE_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    return service;
  }

  @Put('/:id')
  public async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    const { affected } = await this.serviceService.updateOne(
      id,
      updateServiceDto,
    );
    if (affected > 0) {
      return this.serviceService.findOne(id);
    } else {
      throw new HttpException('SERVICE_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: number) {
    const { affected } = await this.serviceService.remove(id);
    if (affected > 0) {
      return;
    } else {
      throw new HttpException('SERVICE_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }
}

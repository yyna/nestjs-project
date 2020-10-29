import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  HttpStatus,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

import { BookingService } from './booking.service';
import { CreateBookingDto, UpdateBookingDto } from './dto';

@Controller('bookings')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post()
  public async create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  public async findAll() {
    return await this.bookingService.findAll();
  }

  @Get('/:id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    const service = await this.bookingService.findOne(id);
    if (!service) {
      throw new HttpException('BOOKING_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    return service;
  }

  @Put('/:id')
  public async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceDto: UpdateBookingDto,
  ) {
    const { affected } = await this.bookingService.updateOne(
      id,
      updateServiceDto,
    );
    if (affected > 0) {
      return this.bookingService.findOne(id);
    } else {
      throw new HttpException('BOOKING_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: number) {
    const { affected } = await this.bookingService.remove(id);
    if (affected > 0) {
      return;
    } else {
      throw new HttpException('BOOKING_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }
}

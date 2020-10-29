import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';

import { Booking } from './booking.entity';
import { CreateBookingDto, UpdateBookingDto } from './dto';

@Injectable()
export class BookingService {
  constructor(
    private connection: Connection,
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ) {}

  async create(booking: CreateBookingDto): Promise<Booking> {
    return this.bookingRepository.save(booking);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  async findOne(id: number): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  async updateOne(id: number, booking: UpdateBookingDto) {
    return this.bookingRepository.update(id, booking);
  }

  async remove(id: number) {
    return this.bookingRepository.delete(id);
  }
}

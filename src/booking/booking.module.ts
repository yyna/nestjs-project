import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingSubscriber } from './booking.subscriber';
import { Booking } from './booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  providers: [BookingService, BookingSubscriber],
  controllers: [BookingController],
  exports: [BookingService],
})
export class BookingModule {}

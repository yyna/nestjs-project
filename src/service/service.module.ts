import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { ServiceSubscriber } from './service.subscriber';
import { Service } from './service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServiceService, ServiceSubscriber],
  controllers: [ServiceController],
  exports: [ServiceService],
})
export class ServiceModule {}

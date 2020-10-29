import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';

import { Service } from './service.entity';
import { CreateServiceDto, UpdateServiceDto } from './dto';

@Injectable()
export class ServiceService {
  constructor(
    private connection: Connection,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async create(service: CreateServiceDto): Promise<Service> {
    return this.serviceRepository.save(service);
  }

  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  async findOne(id: number): Promise<Service> {
    return this.serviceRepository.findOne(id);
  }

  async updateOne(id: number, service: UpdateServiceDto) {
    return this.serviceRepository.update(id, service);
  }

  async remove(id: number) {
    return this.serviceRepository.delete(id);
  }
}

import { Booking } from 'src/booking/booking.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: 'int', nullable: false, default: 0 })
  price: number;

  // Service has many Booking
  @OneToMany(() => Booking, (booking) => booking.service)
  bookings: Booking[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: string;
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: string;
}

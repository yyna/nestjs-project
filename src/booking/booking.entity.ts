import { Service } from 'src/service/service.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

export enum BookingStatus {
  CONFIRMING = 'confirming',
  COMPLETE = 'complete',
  CANCEL = 'cancel',
}

@Entity()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: BookingStatus,
    default: BookingStatus.CONFIRMING,
  })
  status: string;

  // Booking belongs to one User
  @Column({ type: 'int', nullable: false })
  user_id: number;
  @ManyToOne(() => User, (user) => user.bookings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  // Boking belongs to one Service
  @Column({ type: 'int', nullable: false })
  service_id: number;
  @ManyToOne(() => Service, (service) => service.bookings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'service_id' })
  service?: Service;

  @Column({ type: 'timestamp with time zone' })
  service_at: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  price: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: string;
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: string;
}

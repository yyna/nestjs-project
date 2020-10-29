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

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: 'int', nullable: false, default: 0 })
  balance: number;

  @Column({
    type: 'enum',
    enum: UserRole,
    array: true,
    default: [UserRole.USER],
  })
  role: string[];

  // User has many Booking
  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: string;
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: string;
}

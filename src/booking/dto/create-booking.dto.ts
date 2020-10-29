import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  readonly user_id: number;

  @IsNotEmpty()
  readonly service_id: number;

  @IsNotEmpty()
  @IsDateString()
  readonly service_at: string;
}

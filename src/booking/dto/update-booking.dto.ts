import { IsNotEmpty, IsDateString } from 'class-validator';

export class UpdateBookingDto {
  @IsNotEmpty()
  @IsDateString()
  readonly service_at: string;
}

import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { Booking } from './booking.entity';

@EventSubscriber()
export class BookingSubscriber implements EntitySubscriberInterface<Booking> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    console.log('LISTEN TO BOOKING');
    return Booking;
  }

  beforeInsert(event: InsertEvent<Booking>) {
    console.log(`BEFORE BOOKING INSERTED: `, event.entity);
  }

  afterInsert(event: InsertEvent<Booking>) {
    console.log(`AFTER BOOKING INSERT: `, event.entity);
  }

  beforeUpdate(event: UpdateEvent<Booking>) {
    console.log(`BEFORE BOOKING UPDATE: `, event.entity);
  }

  afterUpdate(event: UpdateEvent<Booking>) {
    console.log(`AFTER BOOKING UPDATE: `, event.entity);
  }

  beforeRemove(event: RemoveEvent<Booking>) {
    console.log(`BEFORE BOOKING REMOVE: `, event.entity);
  }

  afterRemove(event: RemoveEvent<Booking>) {
    console.log(`AFTER BOOKING REMOVE: `, event.entity);
  }

  afterLoad() {
    console.log('AFTER LOAD USER');
  }
}

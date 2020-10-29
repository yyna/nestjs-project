import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { Service } from './service.entity';

@EventSubscriber()
export class ServiceSubscriber implements EntitySubscriberInterface<Service> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    console.log('LISTEN TO SERVICE');
    return Service;
  }

  beforeInsert(event: InsertEvent<Service>) {
    console.log(`BEFORE SERVICE INSERTED: `, event.entity);
  }

  afterInsert(event: InsertEvent<Service>) {
    console.log(`AFTER SERVICE INSERT: `, event.entity);
  }

  beforeUpdate(event: UpdateEvent<Service>) {
    console.log(`BEFORE SERVICE UPDATE: `, event.entity);
  }

  afterUpdate(event: UpdateEvent<Service>) {
    console.log(`AFTER SERVICE UPDATE: `, event.entity);
  }

  beforeRemove(event: RemoveEvent<Service>) {
    console.log(`BEFORE SERVICE REMOVE: `, event.entity);
  }

  afterRemove(event: RemoveEvent<Service>) {
    console.log(`AFTER SERVICE REMOVE: `, event.entity);
  }

  afterLoad() {
    console.log('AFTER LOAD USER');
  }
}

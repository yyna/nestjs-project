import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { User } from './user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    console.log('LISTEN TO USER');
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }

  afterInsert(event: InsertEvent<User>) {
    console.log(`AFTER USER INSERT: `, event.entity);
  }

  beforeUpdate(event: UpdateEvent<User>) {
    console.log(`BEFORE USER UPDATE: `, event.entity);
  }

  afterUpdate(event: UpdateEvent<User>) {
    console.log(`AFTER USER UPDATE: `, event.entity);
  }

  beforeRemove(event: RemoveEvent<User>) {
    console.log(`BEFORE USER REMOVE: `, event.entity);
  }

  afterRemove(event: RemoveEvent<User>) {
    console.log(`AFTER USER REMOVE: `, event.entity);
  }

  afterLoad() {
    console.log('AFTER LOAD USER');
  }
}

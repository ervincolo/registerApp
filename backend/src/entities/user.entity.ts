import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class User {
  @ObjectIdColumn()
  id?: ObjectId;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

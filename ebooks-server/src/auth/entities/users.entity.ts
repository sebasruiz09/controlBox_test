import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 80,
  })
  email: string;

  @Column({
    name: 'password',
    length: 250,
    select: false,
  })
  password: string;
}

import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Rating } from './rating.entity';
@Entity({ name: 'Book' })
export class Book {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
  })
  id: string;

  @Column({
    name: 'title',
    type: 'varchar',
  })
  name: string;

  @OneToMany(() => Rating, (rating) => rating.book)
  rating: Rating[];
}

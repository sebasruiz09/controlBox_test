import { User } from 'src/auth/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
@Entity({ name: 'rating' })
export class Rating {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    name: 'value',
    type: 'smallint',
  })
  value: number;

  @ManyToOne(() => User, (user) => user.ratings)
  user: User;

  @ManyToOne(() => Book, (book) => book.rating)
  book: Book;
}

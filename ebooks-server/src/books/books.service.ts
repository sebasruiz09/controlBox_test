import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Rating } from './entities';
import { Response } from '../common/interfaces/response.inteface';
import { Review } from 'src/common/interfaces/review.interface';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Rating)
    private readonly reatingRepository: Repository<Rating>,
  ) {}

  async createBook(book: BookDto): Promise<Response> {
    const { user, id, review, ...props } = book;
    const findBook: Book = await this.findBook(id);
    if (!findBook) {
      const newBook = this.bookRepository.create({
        id,
        ...props,
      });

      const createBook = await this.bookRepository.save(newBook);
      return this.createReview({
        user,
        book: createBook['id'],
        review,
      });
    }
    console.log(book);
    this.allReviews(id);
    return this.createReview({
      user,
      book: findBook,
      review,
    });
  }

  private async createReview(review): Promise<Response> {
    const newReview = this.reatingRepository.create(review);
    await this.reatingRepository.save(newReview);
    return {
      status: 200,
      message: 'rating created',
    };
  }

  private async findBook(id: string): Promise<Book> {
    return await this.bookRepository.findOneBy({ id });
  }

  async allReviews(id: string): Promise<Review[]> {
    const reviews = await this.reatingRepository.find({
      relations: {
        user: true,
      },
      select: {
        review: true,
        user: {
          name: true,
        },
      },
      where: {
        book: {
          id,
        },
      },
    });
    console.log(reviews);
    return reviews;
  }
}

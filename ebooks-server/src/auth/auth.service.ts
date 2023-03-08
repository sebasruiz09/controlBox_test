import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { UserDto } from './dto/user.dto';
import { cryptPassword } from './helpers/bcrypt.helper';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  createUsers = async ({ password, ...props }: UserDto): Promise<User> => {
    const info = this.userRepository.create({
      password: cryptPassword(password),
      ...props,
    });
    return await this.userRepository.save(info);
  };
}

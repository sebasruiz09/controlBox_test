import { IsEmail, IsString, Matches } from 'class-validator';
export class UserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Matches(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-z]).{8,}$/,
  )
  @IsString()
  password: string;
}

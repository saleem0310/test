import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  username: string;
  password: string;
}

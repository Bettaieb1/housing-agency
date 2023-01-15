import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'email',
  'firstName',
  'lastName',
  'birthDate',
] as const) {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  public password: string;
}

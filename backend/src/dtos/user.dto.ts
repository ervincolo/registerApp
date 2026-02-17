import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class UserDto {
  @ApiProperty({
    name: 'fullName',
    type: String,
    description: 'Full name of the user',
    required: true,
  })
  @IsString({
    message: 'Full name must be a string',
  })
  fullName: string;

  @ApiProperty({
    name: 'email',
    type: String,
    description: 'Email address of the user',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'password',
    type: String,
    description: 'Password for the user account',
    required: true,
  })
  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, {
    message: 'Password must contain at least one letter and one number',
  })
  password: string;
}

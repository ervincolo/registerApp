import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserDto } from './dtos/user.dto';

@Controller({
  path: 'user',
})
export class AppController {
  constructor(private authService: AuthService) {}
 @Post()
  async postRegister(@Body() body: UserDto): Promise<string> {
    return this.authService.register(body);
 }
}





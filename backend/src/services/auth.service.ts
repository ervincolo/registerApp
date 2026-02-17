import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserDto } from 'src/dtos/user.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { events } from 'src/config/events';

@Injectable()
export class AuthService {
  constructor(
    private eventEmitterService: EventEmitter2, 
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async register(request: UserDto): Promise<string> {
    const { fullName, email, password } = request;
    const user: User = {
      fullName,
      email,
      password,
    };
   const newUser = this.userRepo.create(user);
   const savedUser = await this.userRepo.save(newUser);
   console.log(`Welcome aboard, ${savedUser.fullName}! Your account has been created. Object info:  `, savedUser);

   this.eventEmitterService.emit(events.USER_REGISTERED, { fullName, email }); 

    return 'User registered successfully!';
  }
}

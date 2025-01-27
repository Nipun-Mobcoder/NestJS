import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/User.dto';
import { AppRepository } from './app.repositry';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  getHello(): string {
    const data = this.appRepository.hello();
    return `Hello World! ${data}`;
  }

  registerUser({ name, email, password }: UserDto): string {
    console.log(name, email, password);
    return 'User registered successfully.';
  }
}

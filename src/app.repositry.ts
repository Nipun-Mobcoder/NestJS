import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRepository {
  hello(): string {
    console.log('Hello App');
    return 'This is from a service.';
  }
}

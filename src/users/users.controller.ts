import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  getUsers() {
    return 'get all users';
  }

  @Get('/cool')
  cool() {
    return 'You\'re so cool';
  }
}

import { Blog } from '@internal/prisma/client';
import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Get('/blogs')
  getBlogs(): Promise<Blog[]> {
    return this.appService.getBlogs();
  }
}

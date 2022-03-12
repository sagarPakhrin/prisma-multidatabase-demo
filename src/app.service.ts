import { Blog } from '@internal/prisma/client';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { PrismaService as PrismaService2 } from './prisma2.service';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prisma2: PrismaService2,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getBlogs(): Promise<Blog[]> {
    return this.prisma2.blog.findMany();
  }
}

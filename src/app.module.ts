import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PrismaService as PrismaService2 } from './prisma2.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, PrismaService2],
})
export class AppModule {}

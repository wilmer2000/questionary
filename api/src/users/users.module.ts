import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../shared/prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Forzamos a NestJS a conectarse a la base de datos de Docker al iniciar el módulo
    await this.$connect();
  }
}
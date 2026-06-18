import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Lo hace disponible en toda la app sin re-importarlo
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exportamos el servicio para que otros puedan usarlo
})
export class PrismaModule {}
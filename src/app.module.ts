import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infra/prisma';
import { ServicoModule } from './domain/servico/servico.module';

@Module({
  imports: [PrismaModule, ServicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

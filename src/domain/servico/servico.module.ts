import { Module } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { ServicoController } from './servico.controller';
import { ServicoDataRepository } from './repositories/servico.repository';

@Module({
  controllers: [ServicoController],
  providers: [ServicoService, ServicoDataRepository],
})
export class ServicoModule {}

import { Injectable } from '@nestjs/common';
import { Servicos } from '@prisma/client';
import { PrismaService } from '../../../infra/prisma/prisma.service';
import { ServicoRepository } from './servico.interface.repository';

@Injectable()
export class ServicoDataRepository implements ServicoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async obterTodos(): Promise<Servicos[]> {
    return await this.prisma.servicos.findMany({});
  }
}

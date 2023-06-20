import { PrismaService } from '../../../infra/prisma/prisma.service';
import { ServicoRepository } from './servico.interface.repository';

export class ServicoDataRepository implements ServicoRepository {
  constructor(private readonly prisma: PrismaService) {}

  obterPeloId(id: number): void {
    throw new Error('Method not implemented.');
  }
}

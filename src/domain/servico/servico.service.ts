import { Injectable } from '@nestjs/common';
import { ServicoDataRepository } from './repositories/servico.repository';

@Injectable()
export class ServicoService {
  constructor(private readonly servicoRepository: ServicoDataRepository) {}

  findAll() {
    return this.servicoRepository.obterTodos();
  }

  findOne(id: number) {
    return `This action returns a #${id} servico`;
  }
}

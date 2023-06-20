import { IServico } from '../interface/servico.interface';
export class Servico implements IServico {
  id: number;
  nome: string;
  custo: number;
}

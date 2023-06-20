import { IPKBase } from 'src/base/identificacao-base';

export interface IServico extends IPKBase {
  nome: string;
  custo: number;
}

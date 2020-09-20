import { Combustivel } from './combustivel'
import { Distribuidora } from './distribuidora'

export class Revenda {

    constructor () {
      this.combustivel = new Combustivel
      this.distribuidora = new Distribuidora
    }

    id: number
    dataColeta: string
    valorCompra: string
    valorVenda: string
    distribuidora: Distribuidora
    combustivel: Combustivel
  }
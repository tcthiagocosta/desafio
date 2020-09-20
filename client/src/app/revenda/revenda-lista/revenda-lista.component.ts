import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distribuidora } from '../distribuidora';
import { Revenda } from '../revenda';
import { RevendaService } from '../revenda.service';

@Component({
  selector: 'app-revenda-lista',
  templateUrl: './revenda-lista.component.html',
  styleUrls: ['./revenda-lista.component.css']
})
export class RevendaListaComponent implements OnInit {

  mes: number
  meses: number[];
  idDistribuidora: number
  lista: Revenda[]
  menssagem: string
  distribuidoras : Distribuidora[] = []
  revendaSelecionada: Revenda

  constructor(
    private service: RevendaService,
    private router: Router,
  ) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {

    this.service
      .getDistribuidoras()
      .subscribe(response =>{
         this.distribuidoras = response
      });
  }

  consultar() {
    this.service
      .buscar(this.mes, this.idDistribuidora)
      .subscribe(response => {
        this.lista = response;
        console.log(this.lista)
        if (this.lista.length <= 0) {
          this.menssagem = "Nenhum registro encontrado";
        } else {
          this.menssagem = null;
        }
      });
  }

  preparaDelecao(revenda: Revenda) {
    this.revendaSelecionada = revenda;
  }

  deletarReenda() {
    this.service
      .deletar(this.revendaSelecionada)
      .subscribe(response => {
        this.consultar()
        this.menssagem = `Revenda ${this.revendaSelecionada.dataColeta} deletado com Sucesso!`        
      },
        erro => this.menssagem = 'Erro ao deletar revenda')
  }

}

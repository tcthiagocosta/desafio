import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultasService } from '../consultas.service';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameParam: string

  files: TreeNode[];

  resultadoConsulta: any[] = []

  titulo: String

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ConsultasService
  ) { }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.nameParam = urlParams['name']
        if (this.nameParam) {
          if (this.nameParam == 'mediaPreco') {
            this.carregaMediaPrecoPorMunicipio()
          } else if (this.nameParam == 'porDistribuidora') {
            this.getInformacoesAgrupadosPorDistribuidora()
          } else if (this.nameParam == 'porData') {
            this.getInformacoesAgrupadosPorData()
          } else if (this.nameParam == 'porBandeira') {
            this.getMediaValorCompraVendaPorBandeira()
          } else if (this.nameParam == 'valorCompraPorMunicipio') {
            this.getMediaValorCompraVendaPorMunicipio()
          } else if (this.nameParam == 'porSiglaDaRegiao') {
            this.getInformacoesImportadasPorSiglaDaRegiao()
          }
        }
      }
    ) 
  }

  carregaMediaPrecoPorMunicipio() {
    this.titulo = 'Retorne a média de preço de combustível com base no nome do município'
    this.service
      .getMediaDePrecoDeVendaPorMunicipio()
      .subscribe(response => {
        this.resultadoConsulta = response
      }, error => {
        console.log('error', error)
      })
  }

  getMediaValorCompraVendaPorBandeira() {
    this.titulo = 'Retorne o valor médio do valor da compra e do valor da venda por bandeira'
    this.service
      .getMediaValorCompraVendaPorBandeira()
      .subscribe(response => {
        this.resultadoConsulta = response
      }, error => {
        console.log('error', error)
      })
  }

  getMediaValorCompraVendaPorMunicipio() {
    this.titulo = 'Retorne o valor médio do valor da compra e do valor da venda por município'
    this.service
      .getMediaValorCompraVendaPorMunicipio()
      .subscribe(response => {
        this.resultadoConsulta = response
      }, error => {
        console.log('error', error)
      })
  }

  getInformacoesAgrupadosPorDistribuidora() {
    this.titulo = 'Retorne os dados agrupados por distribuidora'
    this.service
      .getInformacoesAgrupadosPorDistribuidora()
      .subscribe(response => {
        this.resultadoConsulta = response
      }, error => {
        console.log('error', error)
      })
  }

  getInformacoesAgrupadosPorData() {
    this.titulo = 'Retorne os dados agrupados pela data da coleta'
    this.service
      .getInformacoesAgrupadosPorData()
      .subscribe(response => {
        this.resultadoConsulta = response
      }, error => {
        console.log('error', error)
      })
  }

  getInformacoesImportadasPorSiglaDaRegiao() {
    this.titulo = 'Retorne todas as informações importadas por sigla da região'
    this.service
      .getInformacoesImportadasPorSiglaDaRegiao()
      .subscribe(response => {
        this.resultadoConsulta = response
      }, error => {
        console.log('error', error)
      })
  }

}

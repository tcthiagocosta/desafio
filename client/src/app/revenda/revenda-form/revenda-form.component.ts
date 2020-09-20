import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Combustivel } from '../combustivel';
import { Distribuidora } from '../distribuidora';
import { Revenda } from '../revenda'
import { RevendaService } from '../revenda.service';

@Component({
  selector: 'app-revenda-form',
  templateUrl: './revenda-form.component.html',
  styleUrls: ['./revenda-form.component.css']
})
export class RevendaFormComponent implements OnInit {

  revenda: Revenda
  id: number
  success: boolean = false;
  errors: string[];

  combustiveis : Combustivel[] = []
  distribuidoras : Distribuidora[] = []

  constructor(
    private router: Router,
    private service: RevendaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.revenda = new Revenda()
   }

  ngOnInit(): void {

    // carregando listas
    this.service
      .getCombustiveis()
      .subscribe(response => this.combustiveis = response);

    this.service
      .getDistribuidoras()
      .subscribe(response =>{
         this.distribuidoras = response
      });

    // verifica se foi passado no link o id de uma revenda
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getRevendaId(this.id)
            .subscribe(
              response => {                
                this.revenda = response
              },
              errorResponse => this.revenda = new Revenda()
            )
        }
      }
    ) 
    
  }

  onSubmit() {
    if (this.id) {      
      this.service.atualizar(this.revenda)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar o revenda']
          });
    } else {
      this.service.salvar(this.revenda)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.revenda = response;
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }     
  }

  voltarParaListagem() {
    this.router.navigate(['/revenda/lista']);
  }

}

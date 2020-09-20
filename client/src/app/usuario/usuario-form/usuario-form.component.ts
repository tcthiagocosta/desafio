import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from '../usuario';
import { environment } from 'src/environments/environment';
import { ControlContainer } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario
  id: number
  success: boolean = false;
  errors: string[];

  constructor(
    private router: Router,
    private service: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) {
    this.usuario = new Usuario()
   }

  ngOnInit(): void {   

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getUsuarioId(this.id)
            .subscribe(
              response => {                
                this.usuario = response
              },
              errorResponse => this.usuario = new Usuario()
            )
        }
      }
    )    
  }

  onSubmit() {
    if (this.id) {      
      this.service.atualizar(this.usuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar o usuário']
          });
    } else {      
      this.service.salvar(this.usuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.usuario = response;
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }     
  }

  voltarParaListagem() {
    this.router.navigate(['/usuario/lista']);
  }
}

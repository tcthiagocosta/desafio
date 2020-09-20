import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevendaRoutingModule } from './revenda-routing.module';
import { RevendaFormComponent } from './revenda-form/revenda-form.component';
import { RevendaListaComponent } from './revenda-lista/revenda-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [RevendaFormComponent, RevendaListaComponent],
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule,
    MatCheckboxModule,
    MatSelectModule,
    RevendaRoutingModule
  ],
  exports: [
    RevendaFormComponent,
    RevendaListaComponent
  ]
})
export class RevendaModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RevendaFormComponent } from './revenda-form/revenda-form.component';
import { RevendaListaComponent } from './revenda-lista/revenda-lista.component';

const routes: Routes = [
  {
    path: 'revenda', component: LayoutComponent, children: [
      { path: 'form', component: RevendaFormComponent },
      { path: 'form/:id', component: RevendaFormComponent },
      { path: 'lista', component: RevendaListaComponent },
      { path: '', redirectTo: '/revenda/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevendaRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import {ListComponent} from './list/list.component'

const routes: Routes = [
  {
    path: 'consultas', component: LayoutComponent, children: [
      { path: 'list/:name', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }

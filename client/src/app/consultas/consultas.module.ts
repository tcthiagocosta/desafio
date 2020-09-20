import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ListComponent } from './list/list.component';
import {TreeTableModule} from 'primeng/treetable';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    TreeTableModule,
    AccordionModule
  ],
  exports: [
    ListComponent
  ]
})
export class ConsultasModule { }

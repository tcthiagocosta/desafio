import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';

import { RevendaModule } from './revenda/revenda.module'
import { RevendaService } from './revenda/revenda.service'

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FileComponent } from './file/file.component';

import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';

import { ConsultasModule } from './consultas/consultas.module'
import { ConsultasService } from './consultas/consultas.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NotfoundComponent,
    FileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    
    UsuarioModule,
    RevendaModule,
    
    BrowserAnimationsModule,
    
    FileUploadModule,
    TableModule,

    ConsultasModule
  ],
  providers: [
    UsuarioService,
    ConsultasService,
    RevendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

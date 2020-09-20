import { NotfoundComponent } from './notfound/notfound.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FileComponent } from './file/file.component';

const routes: Routes = [
      
  { path: '', component: LayoutComponent, children:[     
    { path: 'home', component: HomeComponent},
    { path: 'file', component: FileComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
  ] }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

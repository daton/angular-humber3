import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component'
import { PrincipalComponent } from './principal/principal.component'
import {ConsulaComponent} from './consula/consula.component'

const routes: Routes = [
  { path:'', redirectTo:'inicio',pathMatch:'full',},
  {path:'inicio',component:InicioComponent},
  {path:'principal', component:PrincipalComponent},
  {path:'consulta', component:ConsulaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

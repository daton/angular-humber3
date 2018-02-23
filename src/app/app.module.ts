import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { InicioComponent } from './inicio/inicio.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
import {MatButtonModule, MatCheckboxModule,MatCardModule, MatGridListModule,MatInputModule,MatIconModule} from '@angular/material';
 


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ClarityModule,
   MatButtonModule, MatCheckboxModule,MatCardModule, MatGridListModule,MatInputModule,MatIconModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

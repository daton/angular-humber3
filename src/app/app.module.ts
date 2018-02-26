import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { InicioComponent } from './inicio/inicio.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
import {MatButtonModule, MatCheckboxModule,MatCardModule, MatGridListModule,MatInputModule,MatIconModule} from '@angular/material';
import { PrincipalComponent } from './principal/principal.component';
import { ConsulaComponent } from './consula/consula.component';
import {FileUploadModule} from 'primeng/primeng';
import { DxButtonModule } from 'devextreme-angular';
import { DxCalendarModule } from 'devextreme-angular';
import { DxDataGridModule ,DxTextBoxModule,DxCheckBoxModule, DxSelectBoxModule , DxFileUploaderModule} from 'devextreme-angular';
import { alert } from 'devextreme/ui/dialog';

 


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrincipalComponent,
    ConsulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ClarityModule,
   MatButtonModule, MatCheckboxModule,MatCardModule, MatGridListModule,
   MatInputModule,MatIconModule,BrowserAnimationsModule,FileUploadModule,
   DxDataGridModule ,DxTextBoxModule,DxCheckBoxModule, DxSelectBoxModule , DxFileUploaderModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

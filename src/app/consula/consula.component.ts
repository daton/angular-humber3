import { Component, OnInit } from '@angular/core';
import {ConsultaOii} from '../consulta-oii'

import ArrayStore from 'devextreme/data/array_store'
import { SelectItem } from 'primeng/primeng';
import notify from 'devextreme/ui/notify';
import { DxDataGridComponent } from 'devextreme-angular';


@Component({
  selector: 'app-consula',
  templateUrl: './consula.component.html',
  styleUrls: ['./consula.component.css']
})
export class ConsulaComponent implements OnInit {
noSeHaCargado:boolean=true;
listaOii:ConsultaOii[]

selectedItems: any[] = [];
states:any[]=[];


  constructor() { }

  ngOnInit() {
  }





  onBasicUpload(event) {
    //event.files == files to upload
    console.log("Se subio");
   // console.log("ESto llego "+JSON.stringify(event));
   //El siguiente si nos da la respuesta basado en la consulta realziada
   console.log(JSON.parse(event.xhr.response));
 
   console.log("Respuesta como string "+JSON.stringify(event.xhr.response))
   setTimeout(()=>{
     //Trducimos el response al jsonsito que viene en camino
      this.listaOii=JSON.parse(event.xhr.response);
      this.noSeHaCargado=false;

   },1200)
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consula',
  templateUrl: './consula.component.html',
  styleUrls: ['./consula.component.css']
})
export class ConsulaComponent implements OnInit {

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
}
}

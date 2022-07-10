
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {
@Input() ListaNoticias:any;
  constructor() { }


  ngOnInit(): void {
  }



}

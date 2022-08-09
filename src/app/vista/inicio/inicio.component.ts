import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicio/api/api.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //datos:ApiService[]=[];
  datos:any;

  constructor(public api:ApiService ) { }

  ngOnInit(): void {
    this.api.getDatos().subscribe
    (
        (r)=>{this.datos=r; console.log(r)},
        
        (e)=>{console.error(e)}
       
    )
       
  
    
  }

 

}

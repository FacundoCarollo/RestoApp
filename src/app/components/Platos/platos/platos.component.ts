import { Component, EventEmitter, Input, KeyValueDiffers, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, filter, interval, pluck, scan } from 'rxjs';
import { Plato, Platos } from 'src/app/Models/Plato';
import { PlatosServiceService } from 'src/app/service/platos-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  plato: Plato =  new Plato()
  id : number[] = []
  platos: Plato[] = []
  Titulo: string = ''
  constructor( private service : PlatosServiceService) {}

 async ngOnInit() {
  this.PlatoId(663500)
  this.PlatoId(660067)
  this.PlatoId(1323567)
  this.PlatoId(32356)
 }

onPlatoselected(plato: string) {

  this.platos = []

  if(plato.length > 0  ){
    this.service.getPlatos(plato).pipe().subscribe((res)=>{
     for(let req of res.results){
        this.plato = req
        this.PlatoId(this.plato.id )
     }
    })  
    this.platos = []
  }
 
}

async PlatoId(plato : number){
  const req: any = await this.service.getPlato(plato)

  if(req.success != false) {
    this.plato = req;
    this.platos.push(this.plato)
  }
}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { scan } from 'rxjs';
import { Plato } from 'src/app/Models/Plato';
import { HomeComponent } from '../Home/home/home.component';
import { LoginComponent } from '../Login/login/login.component';

@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder!: string 

  @Output() platoSelected = new EventEmitter<string>();
  name!: string ;
  platos: Plato[] = []
  constructor(public route : Router) { }

  ngOnInit() {}

  seleccionarPlato(){
    if(this.name != '' && this.name.length > 2){
     this.platoSelected.emit(this.name);
     }
  }

  LogOut(){
    this.route.navigate([''])
    localStorage.removeItem('Token')
  }
}

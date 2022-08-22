import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iif, take } from 'rxjs';
import { Platos } from 'src/app/Models/Plato';

import { PlatosServiceService } from 'src/app/service/platos-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() : void {}
}

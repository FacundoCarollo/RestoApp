import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Plato, Platos } from 'src/app/Models/Plato';
import { PlatosServiceService } from 'src/app/service/platos-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  closeResult!: string;
  cart!: number
  platos !: Platos []
  plato: Plato =  new Plato()
  constructor(private offcanvasService: NgbOffcanvas , public  service: PlatosServiceService) {}
  ngOnInit(): void {}

  openScroll(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { scroll: true});
  }

 
  

}

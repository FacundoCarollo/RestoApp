import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent {
  public load: boolean;
  constructor(public router : Router) {
    this.load = false;
   }

  ngOnInit() {
    setTimeout(() => {
      this.load = true;
      this.router.navigateByUrl("Home")
    }, 3000);

  }
}

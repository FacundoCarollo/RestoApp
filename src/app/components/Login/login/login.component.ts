import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { Token } from '@angular/compiler';

import { Router, CanActivate } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/service/login/login.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public load: boolean = false;
  constructor(  private http: HttpClient,public snackbar: MatSnackBar, public fb : FormBuilder, public route : Router, public service: LoginService) {}
 
  ngOnInit(): void {}
  
  private url : string = "http://challenge-react.alkemy.org/"
  title = 'SweetAlert'
  token!: Token
  FormLogin: FormGroup = this.fb.group({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required])
  })

  Login(){
    const email = this.FormLogin.get('email')?.value
    const password = this.FormLogin.get('password')?.value
  
    this.service.Login(this.FormLogin.value).subscribe((res: any)=>{
        localStorage.setItem("Token", res.token )
        this.route.navigateByUrl("Carga")
    },error => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Email o Password incorrectos',
        text: 'Ingrese un Email o una Password Valida!',
        width: 400,
        heightAuto: false
      })

    })
  }
}




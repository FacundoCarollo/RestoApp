import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/Home/home/home.component';
import { LoginComponent } from './components/Login/login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CargaComponent } from './components/Carga/carga/carga.component';
import { HttpClientModule}  from '@angular/common/http'
import { PlatosComponent } from './components/Platos/platos/platos.component';
import { SearchComponent } from './components/Search/Search.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CargaComponent,
    PlatosComponent,
    SearchComponent,
    CartComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
  

  
    
   

  ],

 exports: [
 
 ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { LoginComponent } from './components/Login/login/login.component';
import { CargaComponent } from './components/Carga/carga/carga.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { SearchComponent } from './components/Search/Search.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
 {path: "" , component: LoginComponent  },
 {path: "Carga" , component: CargaComponent , canActivate:[CheckLoginGuard]},
 {path: "Home" , component: HomeComponent, canActivate:[CheckLoginGuard]  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounce, lastValueFrom, Observable } from 'rxjs';
import { Plato } from '../Models/Plato';

@Injectable({
  providedIn: 'root'
})
export class PlatosServiceService {
 
  private apikey: string  = '6e61fcbd0410499b931488064a2e2bca';
  //private apikey : string ='f1fa15274ea94e4cbc201366f63dd427'
  //private apikey : string = 'e71e6894ac654318afcc2fa6e1ca593a'
  //private apikey: string = 'dac9406fb2474863abf20a02ea381fbb'
  //private apikey : string = 'bc82f29c152e4ae58d34c1d97d1f76f3'
  //private apikey : string = 'e80f81f78c834b568e7449535496e10f'
  //private apikey : string ='bc99d5daaaa149a4b3b306af18a326bd'
  //private apikey : string ='73781524c85a4e149b563735d1eb0056'
  //private apikey : string ='28d02cfafada499292cbfd8a0eb36bd4'
 // private apikey : string ='6093ffda6e6d464ab73c6887943c729b'
  //private apikey : string ='aa83343201534f66950f8d06fbc378cb'
  //private apikey : string ='2d0451acc85d4827ab2900d07adbdc85'
  //private apikey : string = 'dc3ad3b3aff34808995cfe5816ed6456'
  
  private url = `https://api.spoonacular.com/recipes/`
  private urlSearch = `https://api.spoonacular.com/recipes/complexSearch?`
  
  constructor(private http: HttpClient) { }
  
  async getPlato(id: number) {
    const data$ = this.http.get(`${this.url}${id}/information?includeNutrition=false&apiKey=${this.apikey}`)
    const plato = lastValueFrom(data$);
    return plato;
  }

   getPlatos(title: string): Observable<any>{

    return this.http.get<any>(`${this.urlSearch}query=${title}&apiKey=${this.apikey}`)
    
    
  }

}

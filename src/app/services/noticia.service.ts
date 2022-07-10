import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }
  getNoticias(parametros: any):Observable<any>{
    const URL='https://newsapi.org/v2/top-headlines?country='
    +parametros.pais+'&category='
    +parametros.categoria+'&apiKey=b7d6806dfde8441b911e83758a88eb2e';
    
    return this.http.get(URL);
  }
}

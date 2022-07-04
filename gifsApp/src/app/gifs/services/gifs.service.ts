import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  
  private apiKey: string = "62NPAGHvdNl31O79tRy64fVn3DS77Jc0";
  private urlService: string = "https://api.giphy.com/v1/gifs";

  private _historial: string[] = [];
  
  public resultados: Gif[] =[];  

  // public lastSearch : string[] = [];

  get historial(){
    return [...this._historial];
  }
  
  constructor( private http:HttpClient) { 
    
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')! )
    // }
    this.resultados = JSON.parse(localStorage.getItem('lastSearch')!) ||[];
  }
  
   buscarGifs(query: string){

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
      
    // fetch("https://api.giphy.com/v1/gifs/search?api_key=62NPAGHvdNl31O79tRy64fVn3DS77Jc0&q=league of legends&limit=10")
    // .then( res => {
    //   res.json().then(data => {
    //     console.log(data);
    //   })
    // })
    

    // // Añadir async en la funcion 'buscargifs(){}'
    // const res = await fetch("https://api.giphy.com/v1/gifs/search?api_key=62NPAGHvdNl31O79tRy64fVn3DS77Jc0&q=league of legends&limit=10");
    // const data = await res.json();
    // console.log(data);
    
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.urlService}/search`, {params})
      .subscribe((res) => {
        console.log(res.data);
        this.resultados = res.data;

        localStorage.setItem('lastSearch', JSON.stringify(this.resultados))

      })

  }
}

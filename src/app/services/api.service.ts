import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ApiService {

url: string = 'https://rickandmortyapi.com/api/character/';
  constructor (private httpClient: HttpClient) { }
  listarx(){
    return this.httpClient.get(`${this.url}`)
  }

}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Positive } from '../interfaces/positive';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getCOVID19Positive():Observable<Positive[]>{
    const url = 'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
    return this.httpClient.get<Positive[]>(url)
  }
}

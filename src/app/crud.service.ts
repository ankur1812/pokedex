import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  pokeApiOrigin = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPokemon(start = 0, limit = 10): Observable<any> {
    return this.httpClient.get<any>(`${this.pokeApiOrigin}/pokemon?limit=${limit}&offset=${start}'`)
    // .pipe(
    //   retry(1),
    //   catchError( (error: any) => throwError("Error"))
    // )
  }
}
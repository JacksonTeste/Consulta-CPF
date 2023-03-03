import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cooperado } from '../models/cooperado';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class CooperadoService {

  constructor(private http: HttpClient) { }

  public cooperadoData(): Observable<Cooperado[]>{
    return this.http.get<Cooperado[]>(`${environment.url}cooperado`).pipe(
      res => res,
      error => error
    )
  }
}

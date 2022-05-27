import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Vendedores } from '../models/vendedores';

@Injectable({
  providedIn: 'root',
})
export class VendedoresService {
  constructor(private http: HttpClient) {}

  vendedoresListService(): Observable<Vendedores> {
    return this.http.get<Vendedores>(`${environment.api}/sellers`);
  }

  vendedoresAddService(vendedor: Vendedores): Observable<Vendedores> {
    return this.http.post<Vendedores>(`${environment.api}/sellers`, vendedor);
  }
}

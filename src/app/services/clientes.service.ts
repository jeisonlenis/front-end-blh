import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  clientesListService(): Observable<Clientes> {
    return this.http.get<Clientes>(`${environment.api}/clients`);
  }

  clientesAddService(client: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(`${environment.api}/clients`, client);
  }
}

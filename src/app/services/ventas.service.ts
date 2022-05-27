import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ventas } from '../models/ventas';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  constructor(private http: HttpClient) {}

  ventasListService(): Observable<Ventas> {
    return this.http.get<Ventas>(`${environment.api}/sellers`);
  }

  ventasAddService(venta: Ventas): Observable<Ventas> {
    return this.http.post<Ventas>(`${environment.api}/sellers`, venta);
  }
}

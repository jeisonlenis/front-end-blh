import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Autos } from '../models/autos';

@Injectable({
  providedIn: 'root',
})
export class AutosService {
  constructor(private http: HttpClient) {}

  autosListService(): Observable<Autos> {
    return this.http.get<Autos>(`${environment.api}/cars`);
  }

  autosAddService(auto: Autos): Observable<Autos> {
    console.log(auto);
    return this.http.post<Autos>(`${environment.api}/cars`, auto);
  }
}

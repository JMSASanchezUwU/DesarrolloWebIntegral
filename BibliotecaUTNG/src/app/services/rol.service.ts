import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = 'https://proyecto8vo.onrender.com/api/Rol/';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any>{
    return this.http.get(this.url);
  }
}
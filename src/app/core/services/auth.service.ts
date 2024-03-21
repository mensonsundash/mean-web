import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const AUTH_API = environment.API_ENDPOINT+ "/auth/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(req: any) {
    return this.http.post(AUTH_API+"register", req);
  }
}

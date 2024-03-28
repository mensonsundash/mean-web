import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const USER_API = environment.API_ENDPOINT+ "/user"

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  getProfile(id:any):any {
    return this.http.get(USER_API+`/${id}`,httpOptions);
  }
}

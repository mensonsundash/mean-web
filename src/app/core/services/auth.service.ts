import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const AUTH_API = environment.API_ENDPOINT+ "/auth"

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
    ) { }


  register(req: any) {
    return this.http.post(AUTH_API+"/register", req, httpOptions)
    .subscribe({
      next:(res)=>{
        this.router.navigate(['auth/login']);
        this.toastr.success("Register Successfull!", "Success:");
      },
      error:(err)=>{
        this.toastr.error(err.message, "Error:");
      }
    });
  }

  login(req: any){
    return this.http.post(AUTH_API+"/login", req, httpOptions)
    .subscribe({
      next:(res:any) =>{
        localStorage.setItem("user_id", res.data._id);
        localStorage.setItem("token", res.accessToken);
        if(res.data.isAdmin){
          this.router.navigate(['admin/']);
        }else{
          this.router.navigate(['user/']);
        }

        this.toastr.success("Login Successfull!", "Success:");

      },
      error:(err:any) =>{
        this.toastr.error(err.message, "Error:");
      }
    });
  }

  forget_password(req:any){
    return this.http.post(AUTH_API+"/forget-password", req, httpOptions)
    .subscribe({
      next: (res) =>{
        this.router.navigate(['auth/login']);
        this.toastr.success("Email sent! Please check your email for reset link.", "Success:");
      },
      error: (err)=>{
        this.toastr.error(err.message, "Error:");
      }
    });
  }

  reset_password(req: any){
    return this.http.post(AUTH_API+"/reset-password", req, httpOptions)
    .subscribe({
      next: (res) =>{
        this.router.navigate(['auth/login']);
        this.toastr.success("Password reset successful.", "Success:");
      },
      error: (err) => {
        this.toastr.error(err.message, "Error:");
      }
    })
  }

  isLoggedIn(){
    return !!localStorage.getItem("user_id");
  }

  logout(){
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    this.router.navigate(['auth/login']);
    this.toastr.info("Logout successful.", "Info:");
  }
}

import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

const TOKEN_KEY = 'token';
const USER_ID = 'user_id';
const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private profileService: ProfileService) { }

  signout(): void {
    window.sessionStorage.clear();
  }

  saveToken(token:string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveUser():void{
    window.sessionStorage.setItem(USER_KEY, this.getUser());
  }
  public getUser():any {
    const user_id = window.localStorage.getItem(USER_ID);
    return this.profileService.getProfile(user_id);
  }


}

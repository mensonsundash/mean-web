import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../core/services/token-storage.service';

@Component({
  selector: 'app-utop-bar',
  templateUrl: './utop-bar.component.html',
  styleUrl: './utop-bar.component.scss'
})
export class UtopBarComponent implements OnInit{
  isLoggedIn:boolean = false;
  isProfileOpen = false;
  isNotificationOpen = false;

  userData:any;
  username:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userData = this.tokenStorageService.getUser()
    .subscribe({
      next:(res:any) =>{
        const user = res.data;
        if(user){
          this.username = user.firstName;
        }

      },
      error:(err:any) =>{
       console.log(err);
      }
    });

  }

  ngOnInit(): void {

  }

  logout(){
    this.authService.logout();

  }

  toggleProfileDropdown() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  toggleNotificationDropdown() {
    this.isNotificationOpen = !this.isNotificationOpen;
  }

}

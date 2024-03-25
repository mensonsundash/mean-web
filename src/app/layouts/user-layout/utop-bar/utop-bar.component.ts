import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utop-bar',
  templateUrl: './utop-bar.component.html',
  styleUrl: './utop-bar.component.scss'
})
export class UtopBarComponent implements OnInit{
  isLoggedIn:boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {

  }

  logout(){
    this.authService.logout();

  }

}

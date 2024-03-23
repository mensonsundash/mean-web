import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-atop-bar',
  templateUrl: './atop-bar.component.html',
  styleUrl: './atop-bar.component.scss'
})
export class AtopBarComponent {
  isLoggedIn:boolean = false;

  constructor(
    private authService: AuthService
  ){
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}

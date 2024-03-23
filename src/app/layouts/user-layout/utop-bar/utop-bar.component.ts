import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-utop-bar',
  templateUrl: './utop-bar.component.html',
  styleUrl: './utop-bar.component.scss'
})
export class UtopBarComponent {
  isLoggedIn:boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}

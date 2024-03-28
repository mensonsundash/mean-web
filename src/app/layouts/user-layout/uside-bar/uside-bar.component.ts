import { Component } from '@angular/core';

@Component({
  selector: 'app-uside-bar',
  templateUrl: './uside-bar.component.html',
  styleUrl: './uside-bar.component.scss'
})
export class UsideBarComponent {
  isSubmenuOpen = false;

  toggleDropdown() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}

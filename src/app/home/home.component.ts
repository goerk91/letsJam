import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // navTopics: string[] = ['News', 'Jam', 'Profil', 'Settings'];
  tabs: string[] = ['News', 'Jam', 'Profil', 'Settings'];
  activatedTabIndex: number = 0;

  tabChange(tabIndex: number) {
    debugger;
    this.activatedTabIndex = tabIndex;
  }
}

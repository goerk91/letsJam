import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  tabs: string[] = ['Relevanz', 'Für mich', 'Musikersuche', 'Nachrichten'];
  activatedTabIndex: number = 0;

  tabChange(index: number) {
    this.activatedTabIndex = index;
  }
}

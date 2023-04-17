import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  tabs: string[] = ['Relevanz', 'Für mich', 'Musikersuche', 'Nachrichten'];
  activatedTabIndex: number = 0;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    localStorage.removeItem('wizzardData');
    this.dialog.open(DialogComponent);
  }
  tabChange(index: number) {
    this.activatedTabIndex = index;
  }
}

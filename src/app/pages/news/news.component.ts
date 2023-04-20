import { Component, Input } from '@angular/core';

//Material UI
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  tabs: string[] = ['Relevanz', 'Für mich', 'Musikersuche', 'Nachrichten'];
  activatedTabIndex: number = 0;

  longText =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    //remove WizzardData:
    // localStorage.removeItem('wizzardData')

    let dialogConfig = new MatDialogConfig();

    dialogConfig = {
      disableClose: true,
      autoFocus: true,
      height: '500px',
      width: '600px',
    };

    this.dialog.open(DialogComponent, dialogConfig);
  }
  tabChange(index: number) {
    this.activatedTabIndex = index;
  }
}

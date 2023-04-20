import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() subtitel: string = 'subtitel';
  @Input() titel: string = 'titel';
  @Input() content: string = 'content';
}

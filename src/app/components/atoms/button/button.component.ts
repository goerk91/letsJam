import { Component, Input } from '@angular/core';
import { StepperType } from 'src/app/enums/StepperType';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() isDisabled = false;
  @Input() type = '';
  @Input() stepperType?: StepperType = undefined;

  next = StepperType.next;
  previous = StepperType.previous;
  ngOnInit() {
    console.log(this.stepperType);
  }
}

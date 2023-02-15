import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-onboarding-wizzard',

  templateUrl: './onboarding-wizzard.component.html',
  styleUrls: ['./onboarding-wizzard.component.scss'],
})
export class OnboardingWizzardComponent {
  wizzardForm = new FormGroup({
    name: new FormControl(''),
    hauptinstrument: new FormControl(''),
    einschaetzungInstrument: new FormControl(''),
    genre: new FormControl(''),
  });
}

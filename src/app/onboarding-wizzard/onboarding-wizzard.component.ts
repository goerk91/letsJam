import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onboarding-wizzard',

  templateUrl: './onboarding-wizzard.component.html',
  styleUrls: ['./onboarding-wizzard.component.scss'],
})
export class OnboardingWizzardComponent {
  instruments: string[] = ['Piano', 'Guitar', 'Saxophone', 'Bass', 'Drums'];

  genres = this._formBuilder.group({
    hiphop: false,
    rnb: false,
    classic: false,
    metal: false,
  });

  wizzardForm = new FormGroup({
    name: new FormControl(''),
    hauptinstrument: new FormControl(''),
    einschaetzungInstrument: new FormControl(''),
    genre: new FormControl(''),
  });

  constructor(private _formBuilder: FormBuilder) {}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onboarding-wizzard',

  templateUrl: './onboarding-wizzard.component.html',
  styleUrls: ['./onboarding-wizzard.component.scss'],
})
export class OnboardingWizzardComponent implements OnInit {
  instruments: string[] = ['Piano', 'Guitar', 'Saxophone', 'Bass', 'Drums'];
  selectedInstrument: string;
  wizzardForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //FormGroups - wurden zusätzlich erstellt, da ein "error" im console log auftritt. Leider
    // konnte ich diesen noch nicht beheben
    const genreGroup = this.fb.group({
      hiphop: false,
      rnb: false,
      classic: false,
      metal: false,
    });

    const nameGroup = this.fb.group({
      name: '',
    });

    const hauptinstrumentGroup = this.fb.group({
      hauptinstrument: '',
    });

    const fortschrittGroup = this.fb.group({
      fortschritt: '',
    });

    //Parent FormGroup
    this.wizzardForm = this.fb.group({
      name: nameGroup,
      hauptinstrument: hauptinstrumentGroup,
      fortschritt: fortschrittGroup,
      genre: genreGroup,
    });
    //Test
    this.wizzardForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    //Test
    console.log('Submitted', this.wizzardForm);
    this.wizzardForm.valueChanges.subscribe(console.log);
  }
}

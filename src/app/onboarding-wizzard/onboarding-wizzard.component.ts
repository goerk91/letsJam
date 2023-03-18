import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-wizzard',

  templateUrl: './onboarding-wizzard.component.html',
  styleUrls: ['./onboarding-wizzard.component.scss'],
})
export class OnboardingWizzardComponent implements OnInit {
  instruments: string[] = ['Piano', 'Guitar', 'Saxophone', 'Bass', 'Drums'];
  selectedInstrument: string;
  wizzardForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    //FormGroups - wurden zusätzlich erstellt, da ein "error" im console log auftritt. Leider
    // konnte ich diesen noch nicht beheben
    const genreGroup = this.fb.group({
      hiphop: false,
      rnb: false,
      classic: false,
      metal: false,
    });

    //Parent FormGroup
    this.wizzardForm = this.fb.group({
      nutzerName: '',
      hauptinstrument: '',
      fortschritt: '',
      genre: genreGroup,
    });
  }

  onSubmit() {
    //Test
    console.log('Submitted', this.wizzardForm);
    this.wizzardForm.valueChanges.subscribe(console.log);
    this.router.navigateByUrl('/home');
  }
}

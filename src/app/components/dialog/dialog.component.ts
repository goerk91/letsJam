import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  dialogForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dialogForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: '',
      text: ['', Validators.required],
    });
  }

  postContribution() {
    console.log('Form:', this.dialogForm.value);
    console.log('beitrag veröffentlichen');
  }
}

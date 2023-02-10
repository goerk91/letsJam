import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingWizzardComponent } from './onboarding-wizzard.component';

describe('OnboardingWizzardComponent', () => {
  let component: OnboardingWizzardComponent;
  let fixture: ComponentFixture<OnboardingWizzardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingWizzardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingWizzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

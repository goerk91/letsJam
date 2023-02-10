import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingWizzardComponent } from './onboarding-wizzard/onboarding-wizzard.component';

@NgModule({
  declarations: [AppComponent, OnboardingWizzardComponent],
  imports: [BrowserModule, AppRoutingModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

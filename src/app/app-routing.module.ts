import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnboardingWizzardComponent } from './onboarding-wizzard/onboarding-wizzard.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'onboarding-wizzard', pathMatch: 'full' },
  {
    path: 'onboarding-wizzard',
    component: OnboardingWizzardComponent,
  },
  { path: 'news', component: NewsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

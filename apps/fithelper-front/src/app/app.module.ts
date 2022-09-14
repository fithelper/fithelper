import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';


export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@fithelper/fithelper-front/home/feature-shell').then(
        (module) => module.FithelperFrontHomeFeatureShellModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@fithelper/fithelper-front/login/feature-shell').then(
        (module) => module.FithelperFrontLoginFeatureShellModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@fithelper/fithelper-front/register/feature-shell').then(
        (module) => module.FithelperFrontRegisterFeatureShellModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [
    {provide: 'baseUrl', useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

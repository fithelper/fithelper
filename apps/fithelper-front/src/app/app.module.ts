import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

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
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

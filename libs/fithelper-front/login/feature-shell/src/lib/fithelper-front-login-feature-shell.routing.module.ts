import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@fithelper/fithelper-front/login/feature').then(
        (module) => module.FithelperFrontLoginFeatureModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FithelperFrontLoginFeatureShellRoutingModule {}

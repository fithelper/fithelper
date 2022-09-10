import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@fithelper/fithelper-front/register/feature').then(
        (module) => module.FithelperFrontRegisterFeatureModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FithelperFrontRegisterFeatureShellRoutingModule {}

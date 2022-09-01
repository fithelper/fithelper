import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@fithelper/fithelper-front/home/feature').then(
        (module) => module.FithelperFrontHomeFeatureModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FithelperFrontHomeFeatureShellRoutingModule {}

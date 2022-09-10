import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RegisterComponent],
})
export class FithelperFrontRegisterFeatureModule {}

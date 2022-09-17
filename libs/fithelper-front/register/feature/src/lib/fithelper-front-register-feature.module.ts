import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';
import {FithelperFrontRegisterDataAccessModule} from "@fithelper/fithelper-front/register/data-access";

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FithelperFrontRegisterDataAccessModule],
  declarations: [RegisterComponent],
})
export class FithelperFrontRegisterFeatureModule {}

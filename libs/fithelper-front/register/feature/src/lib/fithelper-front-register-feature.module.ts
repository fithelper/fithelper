import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { FithelperFrontRegisterDataAccessModule } from "@fithelper/fithelper-front/register/data-access";
import { RegisterComponent } from './register/register.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,  
    RouterModule.forChild(routes), FithelperFrontRegisterDataAccessModule],
  declarations: [RegisterComponent],
})
export class FithelperFrontRegisterFeatureModule {}

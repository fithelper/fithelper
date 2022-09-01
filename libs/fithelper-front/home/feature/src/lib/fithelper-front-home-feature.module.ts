import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
})
export class FithelperFrontHomeFeatureModule {}

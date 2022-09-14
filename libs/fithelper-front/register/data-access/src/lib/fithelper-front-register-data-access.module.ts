import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from "./services/register.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RegisterService]
})
export class FithelperFrontRegisterDataAccessModule {}

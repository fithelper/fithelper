import {Component} from '@angular/core';
import {RegisterService} from "@fithelper/fithelper-front/register/data-access";
import {Observable} from "rxjs";

@Component({
  selector: 'fithelper-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
    constructor(private readonly registerService: RegisterService) { }

    register(email: string, password: string): void {
      this.registerService.register(email, password).subscribe();
    }
}

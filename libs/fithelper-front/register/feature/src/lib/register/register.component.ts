import { Component } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

import { RegisterService } from "@fithelper/fithelper-front/register/data-access";

@Component({
  selector: 'fithelper-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
    constructor(private readonly fb: NonNullableFormBuilder, private readonly registerService: RegisterService) { }

    registerForm = this.fb.group({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(8)])
    });

    get email() { return this.registerForm.get('email'); }

    get password() { return this.registerForm.get('password'); }

    register(): void {
      if (this.email?.value && this.password?.value) {
        this.registerService.register(this.email?.value, this.password?.value).subscribe();
      }
    }
}

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
      // Get form values
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      console.warn(email, password);
      if (email && password) {
        this.registerService.register(email, password).subscribe();
      }
    }
}

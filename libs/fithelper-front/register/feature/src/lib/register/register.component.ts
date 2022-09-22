import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { RegisterService } from "@fithelper/fithelper-front/register/data-access";

@Component({
  selector: 'fithelper-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
    registerForm!: FormGroup<{
      email: FormControl<string>;
      password: FormControl<string>;
    }>;

    constructor(private readonly fb: NonNullableFormBuilder, private readonly registerService: RegisterService) {
      this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      });
    }

    register(): void {
      if (this.registerForm.valid && this.registerForm.value.email && this.registerForm.value.password) {
        this.registerService.register(this.registerForm.value.email, this.registerForm.value.password).subscribe();
      }
    }
}

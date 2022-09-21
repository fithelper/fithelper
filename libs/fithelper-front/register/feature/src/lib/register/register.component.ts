import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { RegisterService } from "@fithelper/fithelper-front/register/data-access";

interface RegisterForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'fithelper-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
    registerForm!: FormGroup<RegisterForm>;

    constructor(private readonly fb: FormBuilder, private readonly registerService: RegisterService) {
      this.registerForm = this.fb.group({
        email: new FormControl<string>('', {validators: [Validators.required, Validators.email], nonNullable: true}),
        password: new FormControl<string>('', {validators: [Validators.required, Validators.minLength(8)], nonNullable: true}),
      });
    }

    register(): void {
      if (this.registerForm.valid && this.registerForm.value.email && this.registerForm.value.password) {
        this.registerService.register(this.registerForm.value.email, this.registerForm.value.password).subscribe();
      }
    }
}

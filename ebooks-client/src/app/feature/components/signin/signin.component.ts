import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordRegex } from '../../constants/constants';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  imports: [ReactiveFormsModule],
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  signinForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
    });
  }

  validateForm(): void {
    if(this.signinForm.valid) this.authService.signIn(this.signinForm.value)
  }
}

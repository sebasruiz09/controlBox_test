import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpAdapter } from '../../../core/adapters/http.adapter';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordRegex } from '../../constants/constants';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [ReactiveFormsModule],
  providers: [HttpAdapter],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.buildFrom();
  }

  buildFrom(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
    });
  }

  validateForm(): void {
    this.authService.signup(this.signupForm.value);
  }
}

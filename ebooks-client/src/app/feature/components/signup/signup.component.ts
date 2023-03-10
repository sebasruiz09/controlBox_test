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
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.scss'],
  imports: [ReactiveFormsModule, RouterModule],
  providers: [HttpAdapter],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private route: Router
  ) {}

  signupForm!: FormGroup;

  ngOnInit(): void {
    if (this.authService.isloggedIn()) this.route.navigate(['home']);
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

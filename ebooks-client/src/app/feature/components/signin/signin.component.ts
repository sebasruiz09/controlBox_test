import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordRegex } from '../../constants/constants';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  imports: [ReactiveFormsModule , RouterModule , CommonModule],
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private route: Router
  ) {}

  signinForm!: FormGroup;

  ngOnInit(): void {
    if (this.authService.isloggedIn()) this.route.navigate(['home']);
    this.buildForm();
  }

  buildForm(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
    });
  }

  validateForm(): void {
    if (this.signinForm.valid) this.authService.signIn(this.signinForm.value);
  }
}

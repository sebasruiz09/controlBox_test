import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeGuard } from '../guards/home.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadComponent: () =>
          import('../components/signup/signup.component').then(
            (c) => c.SignupComponent
          ),
      },
      {
        path: 'signin',
        loadComponent: () =>
          import('../components/signin/signin.component').then(
            (c) => c.SigninComponent
          ),
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate : [HomeGuard]
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        path: '**',
        redirectTo: 'signup',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

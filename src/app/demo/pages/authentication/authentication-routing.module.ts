import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './auth-signin/client/client.component';
import { ResponsableComponent } from './auth-signin/responsable/responsable.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'client/signin',
        component: ClientComponent
      },
      {  
        path: 'responsable/signin',
        component: ResponsableComponent
      },
      {
        path: 'signup',
        loadComponent: () => import('./auth-signup/auth-signup.component'),
      },
      {
        path: 'logout',
        redirectTo: 'signin',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

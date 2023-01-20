import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'liste',
        component : ListeComponent
      },
      {
        path: 'ajout',
        component: AjoutComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class VoituresRoutingModule { }

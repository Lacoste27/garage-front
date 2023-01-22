import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { ReparerComponent } from './reparer/reparer.component';
import { AvancementsComponent } from './avancements/avancements.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'deposer/liste',
        component : ListeComponent
      },
      {
        path: 'reparer/liste',
        component : ReparerComponent
      },
      {
        path: 'details/:id',
        component : DetailsComponent
      },
      {  
        path: 'avancement/:id',
        component: AvancementsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReparationsRoutingModule { }

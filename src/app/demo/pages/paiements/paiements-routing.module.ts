import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { EtatComponent } from './etat/etat.component';


const routes : Routes = [
  {  
    path:'',
    children:[  
      { 
        path:'liste',
        component:ListeComponent
      },
      {
        path:'etat/:id',
        component: EtatComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementsRoutingModule { }

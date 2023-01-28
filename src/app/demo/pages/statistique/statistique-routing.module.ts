import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AtelierguardService } from '../../services/guard/atelierguard.service';
import { StatistiqueComponent } from './statistique/statistique.component';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'liste',
        component: StatistiqueComponent,
        //canActivate: [AtelierguardService]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatistiqueRoutingModule { }

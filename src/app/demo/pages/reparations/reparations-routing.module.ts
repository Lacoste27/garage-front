import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { ReparerComponent } from './reparer/reparer.component';
import { AvancementsComponent } from './avancements/avancements.component';
import { AtelierguardService } from '../../services/guard/atelierguard.service';
import { FinancierguardService } from '../../services/guard/financierguard.service';
import { ResponsableguardService } from '../../services/guard/responsableguard.service';
import { AllComponent } from './all/all.component';
import { SortieComponent } from './sortie/sortie.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {  
        path: 'all',
        component : AllComponent,
        canActivate: [ResponsableguardService]
      },
      {
        path: 'deposer/liste',
        component : ListeComponent,
        canActivate: [AtelierguardService]
      },
      {
        path: 'reparer/liste',
        component : ReparerComponent,
        canActivate: [ResponsableguardService]
      },
      {
        path: 'sortie/liste',
        component : SortieComponent,
        canActivate: [ResponsableguardService]
      },
      {
        path: 'details/:id',
        component : DetailsComponent,
        canActivate: [ResponsableguardService]
      },
      {  
        path: 'avancement/:id',
        component: AvancementsComponent,
        canActivate: [ResponsableguardService]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReparationsRoutingModule { }

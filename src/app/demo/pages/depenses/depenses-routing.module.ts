import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { FinancierguardService } from '../../services/guard/financierguard.service';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  {  
    path:'liste',
    component: ListeComponent,
    canActivate: [FinancierguardService] 
  },
  {  
    path:"ajout",
    component:AjoutComponent,
    canActivate: [FinancierguardService] 
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepensesRoutingModule { }

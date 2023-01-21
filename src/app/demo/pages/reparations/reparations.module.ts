import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReparationsRoutingModule } from './reparations-routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReparationsRoutingModule
  ]
})
export class ReparationsModule { }

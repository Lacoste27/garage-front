import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReparationsRoutingModule } from "./reparations-routing.module";
import { DetailsComponent } from "./details/details.component";
import { ReparerComponent } from "./reparer/reparer.component";
import { AvancementsComponent } from './avancements/avancements.component';

@NgModule({
  declarations: [
    AvancementsComponent
  ],
  imports: [CommonModule, ReparationsRoutingModule],
})
export class ReparationsModule {}

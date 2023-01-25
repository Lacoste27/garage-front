import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details/details.component";
import { ListeComponent } from "./liste/liste.component";
import { FactureComponent } from "./facture/facture/facture.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "details/:id",
        component: DetailsComponent,
      },
      {
        path: "facture/:id",
        component: FactureComponent,
      },
      { path: "liste", component: ListeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReparationsRoutingModule { }

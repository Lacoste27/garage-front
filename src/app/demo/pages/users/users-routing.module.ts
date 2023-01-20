import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardService } from "../../services/guard.service";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "voitures",
        loadChildren: () =>
          import("./voitures/voitures.module").then((m) => m.VoituresModule),
        canActivate: [GuardService],
      },
      {
        path: "reparations",
        loadChildren: () =>
          import("./reparations/reparations.module").then(
            (m) => m.ReparationsModule
          ),
        canActivate: [GuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

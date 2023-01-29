import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuardService } from "./demo/services/guard.service";
import { UserguardService } from "./demo/services/guard/userguard.service";
import { AdminComponent } from "./theme/layout/admin/admin.component";
import { GuestComponent } from "./theme/layout/guest/guest.component";

const routes: Routes = [
  {
    path: "",
    component: GuestComponent,
    children: [
      {
        path: "",
        redirectTo: "/auth/client/signin",
        pathMatch: "full",
      },
      {
        path: "auth",
        loadChildren: () =>
          import("./demo/pages/authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./demo/dashboard/dashboard.component"),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./demo/pages/users/users.module").then((m) => m.UsersModule),
        canActivate: [UserguardService]
      },
      {
        path: "reparations",
        loadChildren: () =>
          import("./demo/pages/reparations/reparations.module").then((m) => m.ReparationsModule),
      },
      {
        path: "statistique",
        loadChildren: () => import("./demo/pages/statistique/statistique.module").then((m) => m.StatistiqueModule)
      {  
        path:"paiements",
        loadChildren: () => import("./demo/pages/paiements/paiements.module").then((m)=> m.PaiementsModule)
      },
      {  
        path:"depenses",
        loadChildren: () => import("./demo/pages/depenses/depenses.module").then((m)=>m.DepensesModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

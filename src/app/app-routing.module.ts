import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuardService } from "./demo/services/guard.service";
import { AdminComponent } from "./theme/layout/admin/admin.component";
import { GuestComponent } from "./theme/layout/guest/guest.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "/auth/signin",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadComponent: () => import("./demo/dashboard/dashboard.component")
      },
      {
        path: "users",
        loadChildren: () =>
          import("./demo/pages/users/users.module").then(
            (m) => m.UsersModule
          ),
      },
    ],
    canActivate: [GuardService]
  },
  {
    path: "",
    component: GuestComponent,
    children: [
      {
        path: "auth",
        loadChildren: () =>
          import("./demo/pages/authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

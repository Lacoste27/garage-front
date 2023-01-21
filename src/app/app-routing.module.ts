import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuardService } from "./demo/services/guard.service";
import { AdminComponent } from "./theme/layout/admin/admin.component";
import { GuestComponent } from "./theme/layout/guest/guest.component";

const routes: Routes = [
  {
    path: "",
    component: GuestComponent,
    children: [
      {
        path: "auth",
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
        path: "",
        redirectTo: "/auth/client/signin",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadComponent: () => import("./demo/dashboard/dashboard.component"),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./demo/pages/users/users.module").then((m) => m.UsersModule),
      },
    ],
    canActivate: [GuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

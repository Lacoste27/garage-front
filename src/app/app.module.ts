import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./theme/shared/shared.module";
import { GuestComponent } from "./theme/layout/guest/guest.component";
import { AdminComponent } from "./theme/layout/admin/admin.component";
import { ConfigurationComponent } from "./theme/layout/admin/configuration/configuration.component";
import { NavBarComponent } from "./theme/layout/admin/nav-bar/nav-bar.component";
import { NavigationComponent } from "./theme/layout/admin/navigation/navigation.component";
import { NavLeftComponent } from "./theme/layout/admin/nav-bar/nav-left/nav-left.component";
import { NavRightComponent } from "./theme/layout/admin/nav-bar/nav-right/nav-right.component";
import { NavContentComponent } from "./theme/layout/admin/navigation/nav-content/nav-content.component";
import { NavLogoComponent } from "./theme/layout/admin/navigation/nav-logo/nav-logo.component";
import { NavCollapseComponent } from "./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component";
import { NavGroupComponent } from "./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component";
import { NavItemComponent } from "./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component";
import { NavSearchComponent } from "./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component";
import { NavigationItem } from "./theme/layout/admin/navigation/navigation";
import { ToggleFullScreenDirective } from "./theme/shared/components/full-screen/toggle-full-screen";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthentificationInterceptorService } from "./demo/services/authentification-interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { StatistiqueComponent } from './demo/pages/statistique/statistique/statistique.component';
import { NgApexchartsModule } from "ng-apexcharts";
import {DataTablesModule} from 'angular-datatables';
import { FooterComponent } from './theme/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    AdminComponent,
    ConfigurationComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavContentComponent,
    NavLogoComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    NavSearchComponent,
    ToggleFullScreenDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTablesModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    NavigationItem,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthentificationInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

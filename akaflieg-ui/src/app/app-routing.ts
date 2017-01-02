import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserDashboardComponent} from './dashboard/user-dashboard/user-dashboard.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';
import {DashboardWeatherComponent} from "./dashboard/dashboard-weather/dashboard-weather.component";
import {DashboardShareComponent} from "./dashboard/dashboard-share/dashboard-share.component";
import {DashboardCmsComponent} from "./dashboard/dashboard-cms/dashboard-cms.component";
import {DashboardHomeComponent} from "./dashboard/dashboard-home/dashboard-home.component";
import {MainPageComponent} from "./main-page/main-page.component";

const appRoutes: Routes = [
  {path: 'index', component: MainPageComponent},
  {path: 'privacyPolicy', component: PrivacyPolicyComponent},
  {path: 'termsOfUse', component: TermsOfUseComponent},
  {path: 'dashboard', component: UserDashboardComponent,
    children: [
    {path: '', component: DashboardHomeComponent},
    {path: 'cms', component: DashboardCmsComponent},
    {path: 'share', component: DashboardShareComponent},
    {path: 'weather', component: DashboardWeatherComponent},
  ]},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

  @NgModule({
      imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

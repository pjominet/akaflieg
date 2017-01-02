import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserDashboardComponent} from './dashboard/user-dashboard/user-dashboard.component';
import {DashboardCmsComponent} from './dashboard/dashboard-cms/dashboard-cms.component';
import {DashboardHomeComponent} from './dashboard/dashboard-home/dashboard-home.component';
import {DashboardShareComponent} from './dashboard/dashboard-share/dashboard-share.component';
import {DashboardWeatherComponent} from './dashboard/dashboard-weather/dashboard-weather.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: UserDashboardComponent},
  {path: 'home', component: DashboardHomeComponent},
  {path: 'cms', component: DashboardCmsComponent},
  {path: 'share', component: DashboardShareComponent},
  {path: 'weather', component: DashboardWeatherComponent},
  {path: 'privacyPolicy', component: PrivacyPolicyComponent},
  {path: 'termsOfUse', component: TermsOfUseComponent},
  {path: '', redirectTo: '/main-page', pathMatch: 'full'}
];

  @NgModule({
      imports: [
      RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

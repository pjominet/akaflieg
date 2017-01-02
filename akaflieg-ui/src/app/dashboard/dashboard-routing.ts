import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardCmsComponent} from './dashboard-cms/dashboard-cms.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {DashboardShareComponent} from './dashboard-share/dashboard-share.component';
import {DashboardWeatherComponent} from './dashboard-weather/dashboard-weather.component';

const dashboardRoutes: Routes = [
  {path: 'home', component: DashboardHomeComponent},
  {path: 'cms', component: DashboardCmsComponent},
  {path: 'share', component: DashboardShareComponent},
  {path: 'weather', component: DashboardWeatherComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(dashboardRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

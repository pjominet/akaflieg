import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardWeatherComponent} from './dashboard/dashboard-weather/dashboard-weather.component';
import {DashboardProjectsComponent} from './dashboard/dashboard-projects/dashboard-projects.component';
import {DashboardCmsComponent} from './dashboard/dashboard-cms/dashboard-cms.component';
import {MainPageComponent} from './main-page/main-page.component';
import {NotFoundComponent} from './helpers/not-found/not-found.component';
import {DashboardPublicComponent} from './dashboard/dashboard-public/dashboard-public.component';
import {AuthGuard} from './helpers/auth/auth.guard';
import {LoginComponent} from './dashboard/login/login.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';

const appRoutes: Routes = [
    {path: '404', component: NotFoundComponent},
    {path: 'index', component: MainPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {path: '', component: DashboardWeatherComponent},
            {path: 'cms', component: DashboardCmsComponent, canActivate: [AuthGuard]},
            {path: 'projects', component: DashboardProjectsComponent},
            {path: 'weather', component: DashboardWeatherComponent},
            {path: 'public', component: DashboardPublicComponent},
            {path: 'login', component: LoginComponent},
        ]
    },
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

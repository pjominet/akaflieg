import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ImprintComponent} from './imprint/imprint.component';
import {DashboardWeatherComponent} from './dashboard/dashboard-weather/dashboard-weather.component';
import {DashboardProjectsComponent} from './dashboard/dashboard-projects/dashboard-projects.component';
import {DashboardCmsComponent} from './dashboard/dashboard-cms/dashboard-cms.component';
import {MainPageComponent} from './main-page/main-page.component';
import {NotFoundComponent} from './helpers/not-found/not-found.component';
import {DashboardPublicComponent} from './dashboard/dashboard-public/dashboard-public.component';
import {AuthGuard} from "./helpers/authentification/auth.guard";
import {NotAllowedComponent} from "./helpers/not-allowed/not-allowed.component";
import {LoginComponent} from "./dashboard/login/login.component";

const appRoutes: Routes = [
    {path: '404', component: NotFoundComponent},
    {path: '401', component: NotAllowedComponent},
    {path: 'index', component: MainPageComponent},
    {path: 'privacyPolicy', component: PrivacyPolicyComponent},
    {path: 'termsOfUse', component: ImprintComponent},
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {path: '', component: DashboardProjectsComponent},
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
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

/* --- Angular Modules --- */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
/* --- Main App --- */
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
/* --- Sections --- */
import {NewsComponent} from './sections/news/news.component';
import {AboutComponent} from './sections/about/about.component';
import {PlanesComponent} from './sections/planes/planes.component';
import {SchoolingComponent} from './sections/schooling/schooling.component';
import {AffiliatesComponent} from './sections/affiliates/affiliates.component';
import {ContactComponent} from './sections/contact/contact.component';
/* --- Dashboard --- */
import {UserDashboardComponent} from './dashboard/user-dashboard/user-dashboard.component';
import {DashboardCmsComponent} from './dashboard/dashboard-cms/dashboard-cms.component';
import {DashboardHomeComponent} from './dashboard/dashboard-home/dashboard-home.component';
import {DashboardShareComponent} from './dashboard/dashboard-share/dashboard-share.component';
import {DashboardWeatherComponent} from './dashboard/dashboard-weather/dashboard-weather.component';
/* --- Other --- */
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';
/* --- Services --- */
import {AppService} from "./app.service";
import {MainPageService} from "./main-page/main-page.service";

const appRoutes: Routes = [
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms-of-use', component: TermsOfUseComponent},
  {path: '', redirectTo: '/main-page', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NewsComponent,
    AboutComponent,
    PlanesComponent,
    SchoolingComponent,
    AffiliatesComponent,
    ContactComponent,
    UserDashboardComponent,
    DashboardCmsComponent,
    DashboardHomeComponent,
    DashboardShareComponent,
    DashboardWeatherComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MainPageService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

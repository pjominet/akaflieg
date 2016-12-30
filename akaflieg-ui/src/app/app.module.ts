import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {NewsComponent} from './sections/news/news.component';
import {MainPageComponent} from './main-page/main-page.component';
import {MainPageService} from "./main-page/main-page.service";
import {AboutComponent} from './sections/about/about.component';
import {PlanesComponent} from './sections/planes/planes.component';
import {SchoolingComponent} from './sections/schooling/schooling.component';
import {AffiliatesComponent} from './sections/affiliates/affiliates.component';
import {ContactComponent} from './sections/contact/contact.component';
import {AppService} from "./app.service";
import {UserDashboardComponent} from './dashboard/user-dashboard/user-dashboard.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';
import {AppRoutingModule} from "./app-routing";
import { DashboardCmsComponent } from './dashboard/dashboard-cms/dashboard-cms.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardShareComponent } from './dashboard/dashboard-share/dashboard-share.component';
import { DashboardWeatherComponent } from './dashboard/dashboard-weather/dashboard-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MainPageComponent,
    AboutComponent,
    PlanesComponent,
    SchoolingComponent,
    AffiliatesComponent,
    ContactComponent,
    UserDashboardComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    DashboardCmsComponent,
    DashboardHomeComponent,
    DashboardShareComponent,
    DashboardWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MainPageService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

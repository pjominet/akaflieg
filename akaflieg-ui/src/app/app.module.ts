/* --- Angular Modules --- */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {ScrollSpyModule} from 'ng2-scrollspy';
import {StickyModule} from 'ng2-sticky-kit';
import {DatePipe} from '@angular/common';
import {LOCALE_ID} from '@angular/core';
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
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardCmsComponent} from './dashboard/dashboard-cms/dashboard-cms.component';
import {DashboardProjectsComponent} from './dashboard/dashboard-projects/dashboard-projects.component';
import {DashboardWeatherComponent} from './dashboard/dashboard-weather/dashboard-weather.component';
import {DashboardPublicComponent} from './dashboard/dashboard-public/dashboard-public.component';
import {LoginComponent} from './dashboard/login/login.component'
/* --- Other --- */
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ImprintComponent} from './imprint/imprint.component';
import {NotFoundComponent} from './helpers/not-found/not-found.component';
import {AlertComponent} from './helpers/alert/alert.component';
/* --- Services --- */
import {NewsService} from './sections/news/news.service';
import {DashboardWeatherService} from './dashboard/dashboard-weather/dashboard-weather.service';
import {AlertService} from './helpers/alert/alert.service';
import {AuthGuard} from './dashboard/login/auth.guard';
import {LoginService} from './dashboard/login/login.service';
import {UserService} from './helpers/user/user.service';
import {ContactService} from './sections/contact/contact.service'
import {DashboardCmsService} from './dashboard/dashboard-cms/dashboard-cms.service';
/* --- Routing --- */
import {AppRoutingModule} from './app-routing';


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
        DashboardComponent,
        DashboardCmsComponent,
        DashboardProjectsComponent,
        DashboardWeatherComponent,
        PrivacyPolicyComponent,
        ImprintComponent,
        NotFoundComponent,
        DashboardPublicComponent,
        AlertComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Ng2PageScrollModule,
        ScrollSpyModule.forRoot(),
        StickyModule
    ],
    providers: [
        NewsService,
        DashboardWeatherService,
        AuthGuard,
        AlertService,
        LoginService,
        UserService,
        BaseRequestOptions,
        ContactService,
        DashboardCmsService,
        DatePipe,
        {provide: LOCALE_ID, useValue: 'de-DE'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

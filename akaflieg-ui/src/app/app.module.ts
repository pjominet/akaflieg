/* --- Angular Modules --- */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {ScrollSpyModule} from 'ng2-scrollspy';
/* --- Main App --- */
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {LoginModalComponent} from './login-modal/login-modal.component';
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
/* --- Other --- */
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ImprintComponent} from './imprint/imprint.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {StickyModule} from 'ng2-sticky-kit';
import {AlertComponent} from './helpers/alert/alert.component';
/* --- Services --- */
import {NewsService} from './sections/news/news.service';
import {MainPageService} from './main-page/main-page.service';
import {DashboardWeatherService} from './dashboard/dashboard-weather/dashboard-weather.service';
import {AlertService} from './helpers/alert/alert.service';
import {AuthGuard} from './authentification/auth.guard';
import {AuthenticationService} from './authentification/authentification.service';
import {UserService} from './authentification/user.service';
/* --- Routing --- */
import {AppRoutingModule} from './app-routing';
/* --- Fake Backend --- */
import {fakeBackendProvider} from './helpers/fake-backend';
import {MockBackend} from '@angular/http/testing';


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
        LoginModalComponent,
        DashboardPublicComponent,
        AlertComponent
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
        MainPageService,
        NewsService,
        DashboardWeatherService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

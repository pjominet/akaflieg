/* --- Angular Modules --- */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
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
import {DashboardPublicComponent} from './dashboard/dashboard-public/dashboard-public.component';
import {DashboardWeatherComponent} from './dashboard/dashboard-weather/dashboard-weather.component';
/* --- Other --- */
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TermsOfUseComponent} from './imprint/imprint.component';
import {NotFoundComponent} from './not-found/not-found.component';
/* --- Services --- */
import {AppService} from './app.service';
import {MainPageService} from './main-page/main-page.service';
/* --- Routing --- */
import {AppRoutingModule} from './app-routing';
import {DashboardWeatherService} from './dashboard/dashboard-weather/dashboard-weather.service';


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
        DashboardPublicComponent,
        DashboardWeatherComponent,
        PrivacyPolicyComponent,
        TermsOfUseComponent,
        NotFoundComponent,
        LoginModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Ng2PageScrollModule.forRoot(),
        ScrollSpyModule.forRoot()
    ],
    providers: [MainPageService, AppService, DashboardWeatherService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

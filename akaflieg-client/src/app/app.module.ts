/* --- Angular Modules --- */
import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {GalleryModule} from '@ngx-gallery/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxStickyModule} from 'ng6-sticky';
import {CovalentTextEditorModule} from '@covalent/text-editor';
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
import {ModalComponent} from './helpers/modal/modal.component';

/* --- Services --- */
import {NewsService} from './sections/news/news.service';
import {DashboardWeatherService} from './dashboard/dashboard-weather/dashboard-weather.service';
import {AlertService} from './helpers/alert/alert.service';
import {AuthGuard} from './helpers/auth/auth.guard';
import {AuthenticationService} from './helpers/auth/authentication.service';
import {UserService} from './helpers/user/user.service';
import {ContactService} from './sections/contact/contact.service'
import {DashboardCmsService} from './dashboard/dashboard-cms/dashboard-cms.service';
import {JwtInterceptor} from './helpers/auth/jwt.interceptor';
import {ModalService} from './helpers/modal/modal.service';
/* --- Routing --- */
import {AppRoutingModule} from './app-routing';

registerLocaleData(localeDe, 'de');

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
        LoginComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPageScrollModule,
        GalleryModule.forRoot(),
        NgbModule.forRoot(),
        NgxStickyModule,
        CovalentTextEditorModule
    ],
    providers: [
        NewsService,
        DashboardWeatherService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ContactService,
        DashboardCmsService,
        DatePipe,
        ModalService,
        {provide: LOCALE_ID, useValue: 'de-DE'},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

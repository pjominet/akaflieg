import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserDashboardComponent} from './dashboard/user-dashboard/user-dashboard.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';

const appRoutes: Routes = [
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms-of-use', component: TermsOfUseComponent},
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

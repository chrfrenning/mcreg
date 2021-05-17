import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RootPageComponent } from './root-page/root-page.component';
import { PlayerNameValidationService } from './player-name-validation.service';
import { MsalModule } from '@azure/msal-angular';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    MainNavComponent,
    UnauthorizedComponent,
    RootPageComponent,
    PlayerNameValidationService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      {path: '', component: RootPageComponent},
      {path: 'unauthorized', component: UnauthorizedComponent},
      {path: 'register', component: UserRegistrationFormComponent} // TODO: Enable Guard: was: , canActivate: [AutoLoginGuard]}
    ]),
    // MsalModule.forRoot(
    //   {
    //     auth: {
    //       clientId: '6a06efcf-e31e-4fc1-96a7-ecd070467c49',
    //       authority: 'https://login.microsoftonline.com',
    //       redirectUri: 'http://localhost:4200/register'
    //     },
    //     cache: {
    //       cacheLocation: 'localStorage',
    //       storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
    //     },
    //   },

    //   {
    //     popUp: !isIE,
    //     consentScopes: [
    //       'user.read',
    //       'openid',
    //       'profile',
    //     ],
    //     unprotectedResources: [],
    //     protectedResourceMap: [
    //       ['https://graph.microsoft.com/v1.0/me', ['user.read']]
    //     ],
    //     extraQueryParameters: {}
    //   },

    //   null
    // )
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



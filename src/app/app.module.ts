import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AuthConfigModule } from './auth/auth-config.module';
import { AutoLoginGuard } from 'angular-auth-oidc-client';
//import { AuthorizationGuard } from './auth/authguard';

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

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    MainNavComponent,
    UnauthorizedComponent,
    RootPageComponent
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
    AuthConfigModule,
    RouterModule.forRoot([
      {path: '', component: RootPageComponent},
      {path: 'unauthorized', component: UnauthorizedComponent},
      {path: 'register', component: UserRegistrationFormComponent, canActivate: [AutoLoginGuard]}
    ]),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



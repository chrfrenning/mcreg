import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent {

  isAuthenticated = false;

  constructor(public oidcSecurityService: OidcSecurityService, private router : Router) {}

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe( auth => {
      this.isAuthenticated = auth;
    });
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}

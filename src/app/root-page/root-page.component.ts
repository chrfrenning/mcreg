import { Component, OnInit } from '@angular/core';
//import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.less']
})
export class RootPageComponent implements OnInit {

  constructor(private router : Router) {}
  //constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit(): void {
  }

  // login() {
  //   console.log('start login');
  //   this.oidcSecurityService.authorize();
  // }

  // refreshSession() {
  //   console.log('start refreshSession');
  //   this.oidcSecurityService.authorize();
  // }

  // logout() {
  //   console.log('start logoff');
  //   this.oidcSecurityService.logoff();
  // }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private oidcSecurityService : OidcSecurityService, private router : Router) {}

  isAuthenticated = false;

  ngOnInit() {
    
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      console.log('appcomponent checking auth', auth);
      this.isAuthenticated = auth;
      
      // if ( auth ) {
      //    this.router.navigate(['/register']);
      // }

    });

    // if ( this.oidcSecurityService.getIdToken() != null ) 
    // {
    //     console.log('getIdToken is valid, user is authenticated');
    //     console.log('state: ', this.oidcSecurityService.getState() );
    //     this.oidcSecurityService.checkAuth
    //     //this.router.navigate(['/register']);
    // }
    // else
    // {
    //     console.log('getIdToken is null, user not authenticated');
    // }
  }

  
}

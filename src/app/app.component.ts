import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private router : Router) {}

  isAuthenticated = false;

  ngOnInit() {
    
    // TODO: Set isAuthenticated based on authentication provider
    // this.oidcSecurityService.checkAuth().subscribe((auth) => {
    //   console.log('appcomponent checking auth', auth);
    //   this.isAuthenticated = auth;
      
      // if ( auth ) {
      //    this.router.navigate(['/register']);
      // }

  }
}

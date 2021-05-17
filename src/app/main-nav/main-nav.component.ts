import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent {

  isAuthenticated = false;

  constructor(private router : Router, private authService: MsalService) {}

  ngOnInit() {
    
  }

  logout() {
    this.authService.logoutRedirect();
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}

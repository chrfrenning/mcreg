import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent {

  isAuthenticated = false;

  constructor(private router : Router) {}

  ngOnInit() {
    
  }

  logout() {
    
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}

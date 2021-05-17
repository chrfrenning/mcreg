import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.less']
})
export class RootPageComponent implements OnInit {

  constructor(private router : Router, private authService: MsalService) {}

  ngOnInit(): void {
    
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}

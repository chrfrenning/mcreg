import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.less']
})
export class RootPageComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit(): void {
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}

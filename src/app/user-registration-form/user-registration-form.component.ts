import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styles: [
  ]
})
export class UserRegistrationFormComponent implements OnInit {

  name : '';

  constructor() { }

  ngOnInit(): void {
  }

}

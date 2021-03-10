import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styles: [
  ]
})
export class UserRegistrationFormComponent implements OnInit {

  name = new FormControl('', [Validators.required]); //, [new MinecraftAliasValidator().validate]);
  alias = new FormControl('', [Validators.required]);
  termsAccepted = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}


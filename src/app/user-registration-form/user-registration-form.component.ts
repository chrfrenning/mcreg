import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styles: [
  ]
})
export class UserRegistrationFormComponent implements OnInit {

  form = new FormGroup( { 
    name: new FormControl('', [Validators.required]), //, [new MinecraftAliasValidator().validate]);
    alias: new FormControl('', [Validators.required]),
    termsAccepted: new FormControl('', [Validators.required])
  });

  showTerms = false;
  successfullyRegistered = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  async validate() {
    const response = await fetch(`https://nji8ggmq.azurewebsites.net/api/MinecraftValidateUsername?name=${this.form.controls['name'].value}`);
    console.log(response.body);
  }

  submit() {
    //const response = await fetch(`https://nji8ggmq.azurewebsites.net/api/MinecraftValidateUsername?name=${this.form.controls['name'].value}`);
    //console.log(response.text);
    this.successfullyRegistered = true;
  }

  toggleTerms() {
    this.showTerms = !this.showTerms;
  }

  reset() {
    this.form.controls['name'].setValue("");
    this.showTerms = this.successfullyRegistered = false;
  }

}


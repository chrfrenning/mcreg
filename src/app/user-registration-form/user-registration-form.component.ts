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

  state_default = true; // state, when user first enters
  state_validating = false; // state, switch to progress for playerName validation
  state_submitting = false; // state, switch to progress for api registration

  constructor() { }

  ngOnInit(): void {
    
  }

  async validate() {
    const response = await fetch(`https://nji8ggmq.azurewebsites.net/api/MinecraftValidateUsername?playerName=${this.form.controls['name'].value}`);
    const content = await response.json();
    console.log(content);
  }

  async submit() {
    // first, validate player name
    this.state_default = false;
    this.state_validating = true;
    this.validate();
    this.state_validating = false;

    this.state_submitting = true;
    // missing auth, will fail
    // const response = await fetch(`https://vyr1dcgqc.azurewebsites.net/api/WhitelistPlayer?playerName=${this.form.controls['name'].value}&alias=${this.form.controls['alias'].value}`);
    // const content = await response.text;
    // console.log(response.text);
    // this.successfullyRegistered = true;
    this.state_submitting = false;
    this.state_default = true;

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


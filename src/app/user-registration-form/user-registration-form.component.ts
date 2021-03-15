import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { OidcSecurityService } from 'angular-auth-oidc-client';

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

  constructor(private securityService : OidcSecurityService) { }

  ngOnInit(): void {
    this.securityService.userData$.subscribe( (data) => { 
      console.log(data.upn); 
      this.form.controls['alias'].setValue(data.upn);
    });
  }

  async validate() {
    const response = await fetch(`https://nji8ggmq.azurewebsites.net/api/MinecraftValidateUsername?playerName=${this.form.controls['name'].value}`);
    const content = await response.json();
    console.log("validation webservice: ", content);
    
    if ( content == "true" )
      return true;
    else
      return false;
  }

  async submit() {
    // first, validate player name
    this.state_default = false;
    this.state_validating = true;
    this.validate();
    this.state_validating = false;

    this.state_submitting = true;
    const token = this.securityService.getToken();
    // missing auth, will fail
    var url = `https://vyr1dcgqc.azurewebsites.net/api/WhitelistPlayer?playerName=${this.form.controls['name'].value}&alias=${this.form.controls['alias'].value}`;
    const response = await fetch(url, {
      headers : {
        Authorization: 'Bearer ' + token
      }
    });
    const content = await response.text;
     console.log(response.text);
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


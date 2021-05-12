import { PlayerNameValidationService } from './../player-name-validation.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators, FormControl, FormGroup } from '@angular/forms';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, pipe, of } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styles: [
  ]
})
export class UserRegistrationFormComponent implements OnInit {

  form = new FormGroup( { 
    name: new FormControl(''),
    alias: new FormControl(''),
    termsAccepted: new FormControl('')
  });

  showTerms = false;
  successfullyRegistered = false;
  readyToSubmit = false;
  displayPlayerNameWarning = false;

  state_default = true; // state, when user first enters
  state_validating = false; // state, switch to progress for playerName validation
  state_submitting = false; // state, switch to progress for api registration

  constructor(private securityService : OidcSecurityService, private pnv : PlayerNameValidationService) { }

  ngOnInit(): void {
    this.securityService.userData$.subscribe( (data) => { 
      console.log(data.upn); 
      this.form.controls['alias'].setValue(data.upn);
    });

    this.form.controls['name'].valueChanges.subscribe( value => {
      console.log("Player name changed to", this.form.controls['name'].value);
      this.readyToSubmit = false;
      
      this.pnv.validatePlayerName( this.form.controls['name'].value ).then( value =>
        { 
          this.readyToSubmit = value;
          this.displayPlayerNameWarning = !this.readyToSubmit;
        }
      )
    });
  }

  async submit() {
    // first, validate player name
    this.state_default = false;

    // this.state_validating = true;
    // this.validate();
    // this.state_validating = false;

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

  onPlayerNameChange(event: any) {
    
  }

  toggleTerms() {
    this.showTerms = !this.showTerms;
  }

  reset() {
    this.form.controls['name'].setValue("");
    this.showTerms = this.successfullyRegistered = false;
  }

  

}


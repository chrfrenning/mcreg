import { debounceTime, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Directive, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  //selector: '[playerNameValidator][ngModel],[playerNameValidator][FormControl]',
  selector: '[playerNameValidator]',
  providers: [
      {provide: NG_ASYNC_VALIDATORS, useExisting: PlayerNameValidationService, multi: true}
  ]
})
@Injectable({providedIn: 'root'})
export class PlayerNameValidationService implements AsyncValidator {

  constructor(private http : HttpClient) { }

  // validate(control: AbstractControl) : Observable<ValidationErrors> | null 
  // {
  //   console.log("Validating player name");

  //   var value : string = control.value;
  //   return this.http.get(`https://nji8ggmq.azurewebsites.net/api/MinecraftValidateUsername?playerName=${value}`)
  //   .pipe(
  //     debounceTime(500),
  //     map( (data:any) =>  {
  //       console.log("data:", data);
  //       return data != true ? ({ playerNameValidator: { isValid: false }}) : null;
  //     })
  //   )
  // }

  validate(control: AbstractControl) : Observable<ValidationErrors> | null 
  {
    const value : string = encodeURIComponent( control.value );
    const url = `https://nji8ggmq.azurewebsites.net/api/MinecraftValidateUsername?playerName=${value}`;

    console.log("Validating player name", value, url);

    const obs = this.http.get<boolean>(url)
    .pipe(
      map((isValid) => {
        console.log("Validation call completed:", isValid);
        return isValid ? null : { playerNameValidator: { isValid: false }};
      })
    );

    return obs;
  }

  async validatePlayerName( playerName : string )
  {
    const value : string = encodeURIComponent( playerName );
    const url = `https://nji8ggmq.azurewebsites.net/api/MinecraftValidateUsername?playerName=${value}`;

    console.log("Validating player name", value, url);
    return this.http.get<boolean>(url).toPromise();
  }
}

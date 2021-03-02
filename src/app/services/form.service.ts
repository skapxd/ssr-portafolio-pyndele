import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient
  ) {}

  crearRegistro( form: {} ){
    
    return this.http.post('https://us-central1-allapp-10b26.cloudfunctions.net/api/landing', {
      ...form
    }).subscribe( res => console.log(res))
  }
}

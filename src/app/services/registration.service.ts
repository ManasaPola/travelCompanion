import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  SignUp(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  login(email: string, password: string) {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log('LOGIN SUCCESSFULL')
      )
    .catch(
      error => console.log(error)
    );
  }
}

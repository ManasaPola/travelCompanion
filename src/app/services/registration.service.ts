import {Injectable, NgZone} from '@angular/core';
import * as firebase from 'firebase';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginService} from '../screens/login-screen/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private router: Router, private loginService: LoginService) {}

  SignUp(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigateByUrl('/Travellers');
          this.loginService.login(email, password);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {console.log('LOGIN SUCCESSFULL');
        this.router.navigateByUrl('/Travellers');
        this.loginService.login(email, password);
        }
      )
    .catch(
      error => console.log(error)
    );
  }
}

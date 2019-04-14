import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(public registrationService: RegistrationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.registrationService.login(email, password);

  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
  styleUrls: ['./sign-up-screen.component.css']
})
export class SignUpScreenComponent implements OnInit {

  constructor(public registrationService: RegistrationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.registrationService.SignUp(email, password);

  }

}

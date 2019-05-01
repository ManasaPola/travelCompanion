import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User = {
    email: ''
  };

  constructor() { }

  login(email: string, password: string) {
    this.user.email = email;
  }
  send() {
    return this.user;
  }
}

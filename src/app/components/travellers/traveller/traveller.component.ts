import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TravellerService} from '../../../services/traveller.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../../models/user';
import {LoginService} from '../../../screens/login-screen/login.service';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {
  user: User;

  constructor(private travellerService: TravellerService, private tostr: ToastrService, private loginService: LoginService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(travellerForm: NgForm) {
    this.user = this.loginService.send();
    this.travellerService.insertTraveller(travellerForm.value, this.user.email);
    this.resetForm(travellerForm);
    this.tostr.success('Submitted Sucessfully', 'Registration');
  }

  resetForm(travellerForm?: NgForm) {
    if (travellerForm != null) {
      travellerForm.reset(); }
    this.travellerService.selectedTraveller = {
      $key : null,
      name: '',
      fromAirport: '',
      toAirport: '',
      fromDate: '',
      toDate: ''
    };
  }
}

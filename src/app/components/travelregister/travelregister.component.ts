import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TravellerService} from '../../services/traveller.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-travelregister',
  templateUrl: './travelregister.component.html',
  styleUrls: ['./travelregister.component.css']
})
export class TravelregisterComponent implements OnInit {

  constructor(private travellerService: TravellerService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  // onSubmit(travellerRegisterForm: NgForm) {
  //   this.travellerService.insertTraveller(travellerRegisterForm.value);
  //   this.resetForm(travellerForm);
  //   this.tostr.success('Submitted Sucessfully', 'Registration');
  // }

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

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TravellerService} from '../../../services/traveller.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {

  constructor(private travellerService: TravellerService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(travellerForm: NgForm) {
    this.travellerService.insertTraveller(travellerForm.value);
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

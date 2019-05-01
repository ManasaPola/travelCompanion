import { Component, OnInit, ViewChild } from '@angular/core';
import {TravellerService} from '../../services/traveller.service';
import { TravellerComponent } from './traveller/traveller.component';
import {Traveller} from '../../services/traveller.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.css'],
  providers : [TravellerService]
})
export class TravellersComponent implements OnInit {


  constructor(private travellerService: TravellerService) { }

  ngOnInit() {

  }

}

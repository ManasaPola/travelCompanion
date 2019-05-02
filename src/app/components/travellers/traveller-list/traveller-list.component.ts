import { Component, OnInit, Input } from '@angular/core';
import {TravellerService} from '../../../services/traveller.service';
import {Traveller} from '../../../services/traveller.model';
import {MessagingService} from '../../../services/messaging.service';
import {Messaging} from '../../../services/messaging.model';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../../screens/login-screen/login.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-traveller-list',
  templateUrl: './traveller-list.component.html',
  styleUrls: ['./traveller-list.component.css']
})
export class TravellerListComponent implements OnInit {
  travellerList: Traveller[];
  user: User;
  constructor(private travellerService: TravellerService, private messagingService: MessagingService, private tostr: ToastrService, private loginService: LoginService ) { }
  ngOnInit() {
  }
}

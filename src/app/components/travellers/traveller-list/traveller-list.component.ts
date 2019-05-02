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
      // const x = this.travellerService.getData();
      // x.snapshotChanges().subscribe(item => {
      //   this.travellerList = [];
      //   const fromDateCheck = '3/20/2019';
      //   const toDateCheck = '3/25/2019';
      //   const fromdateCheckParsed = fromDateCheck.split('/');
      //   const toDateCheckParsed = toDateCheck.split('/');
      //   const fromCheck = new Date(fromdateCheckParsed[2], parseInt(fromdateCheckParsed[0]) - 1, fromdateCheckParsed[1]);
      //   const toCheck = new Date(toDateCheckParsed[2], parseInt(toDateCheckParsed[0]) - 1, toDateCheckParsed[1]);
      //   item.forEach(element => {
      //     const y = element.payload.toJSON();
      //     if (y.fromAirport === 'Phoenix') {
      //       if (y.toAirport === 'Hyderabad') {
      //         const givenFromdate = y.fromDate.split('/');
      //         const givenTodate = y.toDate.split('/');
      //         const from = new Date(givenFromdate[2], parseInt(givenFromdate[0]) - 1, givenFromdate[1]);
      //         const to = new Date(givenTodate[2], parseInt(givenTodate[0]) - 1, givenTodate[1]);
      //         if ((fromCheck > from && fromCheck < to) || (toCheck > from && toCheck < to) || (fromCheck < from && toCheck > to)) {
      //           y['$key'] = element.key;
      //           this.travellerList.push(y as Traveller);
      //         }
      //       }
      //     }
      //   });
      // });
  }


  onSend() {
    this.user = this.loginService.send();
    this.travellerService.sendMessageData(this.user.email);
    this.tostr.success('Success', 'Message Sent Successfully');
    console.log(this.user);
  }
}

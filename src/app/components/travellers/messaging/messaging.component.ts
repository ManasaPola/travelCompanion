import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../../../services/messaging.service';
import {Messaging} from '../../../services/messaging.model';
import {TravellerService} from '../../../services/traveller.service';
import {Traveller} from '../../../services/traveller.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  messageList: Messaging[];

  constructor(private messagingService: MessagingService, private tostr: ToastrService, private travellerService: TravellerService) {
  }

  ngOnInit() {
    const a = this.travellerService.getMData();
    a.snapshotChanges().subscribe(item => {
      this.messageList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.messageList.push(y as Messaging);
      });
    });
  }
}

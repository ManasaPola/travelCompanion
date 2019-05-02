import { Component, OnInit } from '@angular/core';
import {Messaging} from '../../services/messaging.model';
import {MessagingService} from '../../services/messaging.service';
import {TravellerService} from '../../services/traveller.service';
import {Traveller} from '../../services/traveller.model';
import {LoginService} from '../../screens/login-screen/login.service';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messageList: Messaging[];
  newMessageList: Messaging[];
  user: User;

  constructor(private messagingService: MessagingService, private tostr: ToastrService, private travellerService: TravellerService, private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.send();
    console.log(this.user);
    const a = this.travellerService.getMData();
    a.snapshotChanges().subscribe(item => {
      this.messageList = [];
      this.newMessageList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.messageList.push(y as Messaging);
      });
      for (const i of this.messageList) {
        console.log(this.user.email);
        if (i.receiverId === this.user.email) {
          this.newMessageList.push(i as Messaging);
        }
      }
    });
  }

}

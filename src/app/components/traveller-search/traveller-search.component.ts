import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {TravellerService} from '../../services/traveller.service';
import {Traveller} from '../../services/traveller.model';
import {MatTableDataSource} from '@angular/material';
import {LoginService} from '../../screens/login-screen/login.service';
import {MessagingService} from '../../services/messaging.service';
import {User} from '../../models/user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-traveller-search',
  templateUrl: './traveller-search.component.html',
  styleUrls: ['./traveller-search.component.css']
})
export class TravellerSearchComponent implements OnInit {
  travellerList: Traveller[];
  newTravallerList: Traveller[];
  user: User;
  messageText: String = '';
  constructor(private travellerService: TravellerService, private loginService: LoginService, private messageService: MessagingService, private tostr: ToastrService) { }
  display = 'none';
  @Input('title') title: string;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name'];
  // displayedColumns: string[] = ['name', 'fromAirport', 'toAirport', 'fromDate', 'toDate', 'Action'];
  ngOnInit() {
  }

  onSearch(travellerForm: NgForm) {
    const x = this.travellerService.getData();
    x.snapshotChanges().subscribe(item => {
      this.travellerList = [];
      this.newTravallerList = [];
      const fromCheck = new Date(travellerForm.value.fromDate);
      const toCheck = new Date(travellerForm.value.toDate);
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.travellerList.push(y as Traveller);
      });
      // console.log(this.travellerList);
      for (const i of this.travellerList) {
        if (i.fromAirport === travellerForm.value.fromAirport) {
          if (i.toAirport === travellerForm.value.toAirport) {
            const from = new Date(i.fromDate);
            const to = new Date(i.toDate);
            if (!(to < fromCheck || from > toCheck)) {
              this.newTravallerList.push(i as Traveller);
            }
          }
        }
      }
      console.log(this.newTravallerList);
      this.listData = new MatTableDataSource(this.newTravallerList);
    });
  }
  openModal(name) {
    this.display = 'block';
    this.title = name;
  }
  onCloseHandled() {
    this.display = 'none';
  }

  onSend(messageDataForm: NgForm) {
    console.log(messageDataForm.value.messageText);
    this.user = this.loginService.send();
    this.travellerService.sendMessageData(messageDataForm.value.messageText, this.user.email);
    this.tostr.success('Success', 'Message Sent Successfully');
  }
}

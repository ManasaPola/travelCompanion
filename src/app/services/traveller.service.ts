import { Injectable } from '@angular/core';
import {Traveller} from './traveller.model';
import {Messaging} from './messaging.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {
  travellerList: AngularFireList<any>;
  messageList: AngularFireList<any>;
  selectedTraveller: Traveller = new Traveller();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    // const fromAirportref = this.firebase.child('travellers').orderByChild('fromAirport').equalTo('Phoenix');
    // const fromAirportref = this.firebase.list('travellers', fromAirportref => fromAirportref.orderByChild('fromAirport').
    // equalTo('Hyderabad'));
    // this.travellerListfromDate = this.firebase.list('travellers', ref => ref.orderByChild('fromDate').endAt('3/20/2019'))
    // this.travellerListtoDate = this.firebase.list('travellers', ref => ref.orderByChild('toDate').startAt('3/25/2019'))
    // this.travellerList = this.travellerListfromDate.concat(this.travellerListtoDate);
    this.travellerList = this.firebase.list('travellers');
    // this.travellerList = this.firebase.list('travellers', ref => ref.orderByChild('toAirport').equalTo('Phoenix'));
    // this.travellerList = this.firebase.list('travellers', ref => ref.orderByChild('fromDate').endAt('4/30/2019'));
    // this.travellerList = this.firebase.list('travellers', ref => ref.orderByChild('fromDate').startAt('4/29/2019').endAt('4/29/2019'));
    return this.travellerList;
  }

  getMData() {
    this.messageList = this.firebase.list('messages');
    return this.messageList;
  }

  sendMessageData(receiverId: string) {
    this.messageList.push({
      receiverId: receiverId,
      messageText: 'hello'
    });
  }

  insertTraveller(traveller: Traveller) {
    this.travellerList.push({
      name: traveller.name,
      fromAirport: traveller.fromAirport,
      toAirport: traveller.toAirport,
      fromDate: traveller.fromDate,
      toDate: traveller.toDate
    });
  }

  updateTraveller(traveller: Traveller) {
    this.travellerList.update(traveller.$key, {
      name : traveller.name,
      fromAirport: traveller.fromAirport,
      toAirport: traveller.toAirport,
      fromDate: traveller.fromDate,
      toDate: traveller.toDate
  });
  }

  deleteEmployee($key: string) {
    this.travellerList.remove($key);
  }
}

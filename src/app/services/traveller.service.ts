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
    this.travellerList = this.firebase.list('travellers');
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

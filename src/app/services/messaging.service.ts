import { Injectable } from '@angular/core';
import {Messaging} from './messaging.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  messageList: AngularFireList<any>;
  selectedMessage: Messaging = new Messaging();

  constructor(private firebase: AngularFireDatabase) { }
  getMessageData() {
    this.messageList = this.firebase.list('messages');
  }

  sendMessageData() {
    this.messageList.push({
      receiverId: 'Manasa',
      messageText: 'Hello Message'
    });
  }
}

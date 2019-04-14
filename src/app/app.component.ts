import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'travelfs';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDcekbqiTC1lOQ9VD2Z17nqy_0HlMklIbk",
      authDomain: "travel1-ef520.firebaseapp.com"
    });
  }
}

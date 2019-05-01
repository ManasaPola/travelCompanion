import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserService} from './services/user.service';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { SignUpScreenComponent } from './screens/sign-up-screen/sign-up-screen.component';
import {FormsModule} from '@angular/forms';

import { RegistrationService } from './services/registration.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { TravellersComponent } from './components/travellers/travellers.component';
import { TravellerComponent } from './components/travellers/traveller/traveller.component';
import { TravellerListComponent } from './components/travellers/traveller-list/traveller-list.component';
import { TravellerService} from './services/traveller.service';
import { ToastrModule} from 'ngx-toastr';
import { MessagingComponent } from './components/travellers/messaging/messaging.component';
import { MessagePopupComponent } from './components/travellers/message-popup/message-popup.component';
import {MessagingService} from './services/messaging.service';
import {LoginService} from './screens/login-screen/login.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginScreenComponent,
    SignUpScreenComponent,
    TravellersComponent,
    TravellerComponent,
    TravellerListComponent,
    MessagingComponent,
    MessagePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'travelfs'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, RegistrationService, TravellerService, MessagingService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginScreenComponent,
    SignUpScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'travelfs'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [UserService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

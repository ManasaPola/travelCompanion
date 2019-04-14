import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpScreenComponent} from './screens/sign-up-screen/sign-up-screen.component';
import {LoginScreenComponent} from './screens/login-screen/login-screen.component';

const routes: Routes = [
  {path: '', component: SignUpScreenComponent},
  {path: 'login', component: LoginScreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpScreenComponent} from './screens/sign-up-screen/sign-up-screen.component';
import {LoginScreenComponent} from './screens/login-screen/login-screen.component';
import {TravellerComponent} from './components/travellers/traveller/traveller.component';
import {TravellersComponent} from './components/travellers/travellers.component';
import {TravellerListComponent} from './components/travellers/traveller-list/traveller-list.component';
import {TravellerSearchComponent} from './components/traveller-search/traveller-search.component';
import {TravelregisterComponent} from './components/travelregister/travelregister.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', component: SignUpScreenComponent},
  {path: 'login', component: LoginScreenComponent},
  {path: 'Travellers', component: TravellersComponent},
  {path: 'TravellerSearch', component: TravellerSearchComponent},
  {path: 'TravellerRegister', component: TravelregisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Traveller', component: TravellerComponent}
  // {path: 'Traveller-List', component: TravellerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

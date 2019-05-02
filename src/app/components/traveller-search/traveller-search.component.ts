import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {TravellerService} from '../../services/traveller.service';
import {Traveller} from '../../services/traveller.model';

@Component({
  selector: 'app-traveller-search',
  templateUrl: './traveller-search.component.html',
  styleUrls: ['./traveller-search.component.css']
})
export class TravellerSearchComponent implements OnInit {
  travellerList: Traveller[];
  newTravallerList: Traveller[];
  constructor(private travellerService: TravellerService) { }

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
    });

  }

}

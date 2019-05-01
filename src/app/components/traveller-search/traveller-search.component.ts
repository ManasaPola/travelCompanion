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
  constructor(private travellerService: TravellerService) { }

  ngOnInit() {
  }

  onSearch(travellerForm: NgForm) {
    console.log(travellerForm.value.fromAirport);

    const x = this.travellerService.getData();
    x.snapshotChanges().subscribe(item => {
      this.travellerList = [];

      const fromDateCheck = travellerForm.value.fromDate;
      const toDateCheck = travellerForm.value.toDate;
      const fromdateCheckParsed = fromDateCheck.split('/');
      const toDateCheckParsed = toDateCheck.split('/');
      const fromCheck = new Date(fromdateCheckParsed[2], parseInt(fromdateCheckParsed[0]) - 1, fromdateCheckParsed[1]);
      const toCheck = new Date(toDateCheckParsed[2], parseInt(toDateCheckParsed[0]) - 1, toDateCheckParsed[1]);

      item.forEach(element => {
        const y = element.payload.toJSON();
        if (y.fromAirport === travellerForm.value.fromAirport) {
          if (y.toAirport === travellerForm.value.toAirport) {
            const givenFromdate = y.fromDate.split('/');
            const givenTodate = y.toDate.split('/');
            const from = new Date(givenFromdate[2], parseInt(givenFromdate[0]) - 1, givenFromdate[1]);
            const to = new Date(givenTodate[2], parseInt(givenTodate[0]) - 1, givenTodate[1]);
            if ((fromCheck >= from && fromCheck <= to) || (toCheck >= to && toCheck <= to) || (fromCheck <= from && toCheck >= to)) {
              console.log('Entered');
              y['$key'] = element.key;
              this.travellerList.push(y as Traveller);
            }
          }
        }
        // y['$key'] = element.key;
        // this.travellerList.push(y as Traveller);
      });
    });

  }

}

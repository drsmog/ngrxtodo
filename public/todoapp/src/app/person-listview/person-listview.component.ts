import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '../reducers/reducer';

@Component({
  selector: 'app-person-listview',
  templateUrl: './person-listview.component.html',
  styleUrls: ['./person-listview.component.css']
})
export class PersonListviewComponent implements OnInit {
  
  @Input()
  personList: Person[];

  constructor() { }

  ngOnInit() {
  }

}

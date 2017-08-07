import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Person, ADD_PERSON_ACTION, GlobalAppState } from '../reducers/reducer'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personList: Observable<Person[]>;

  constructor(private store: Store<GlobalAppState>) {
    this.personList = store.select(t => t.persons.personList);
  }

  ngOnInit() {
  }

  addPerson(firstName, email) {
    let act = new ADD_PERSON_ACTION({ name: firstName, email: email });
    this.store.dispatch(act);
  }

}

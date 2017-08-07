import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GlobalAppState, ADD_TODO_ACTION, TODO, Person } from '../reducers/reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Observable<TODO[]>;
  personList: Observable<Person[]>

  constructor(private store: Store<GlobalAppState>) {
    this.todoList = this.store.select(t => t.todos.todoList);
    this.personList = this.store.select(t => t.persons.personList);
  }

  ngOnInit() {
  }

  add_todo(title, description) {
    let act = new ADD_TODO_ACTION({ title: title, description: description });
    this.store.dispatch(act);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers/reducer';
import { PersonComponent } from './person/person.component';
import { PersonListviewComponent } from './person-listview/person-listview.component'


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PersonComponent,
    PersonListviewComponent


  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

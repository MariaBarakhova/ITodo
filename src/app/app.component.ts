import { Component, OnInit } from '@angular/core';
import { ITodoService } from './i-todo.service';
import { AppStore } from './store/models/app-store.interface';
import { Store } from '@ngrx/store';
import { listActionTypes, todoActionTypes } from './store/constans/iTodo.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'itodo';
  constructor(
    private iTodoService: ITodoService,
    private store: Store<AppStore>
  ) {}
  ngOnInit() {
    this.store.select('todolist')
    .subscribe(storevalue => console.log('store', storevalue))
    this.getData()
  }
  getData(): void {
    this.iTodoService.getData('lists')
    .subscribe(
      (payload) => {console.log(payload)
      ;
      this.store.dispatch({type: listActionTypes.LOAD, payload});
      this.iTodoService.getData('todos')
    .subscribe(
      (payload) => {console.log(payload);
      this.store.dispatch({type: todoActionTypes.LOAD,
      payload
    });
  });
  });
}
}

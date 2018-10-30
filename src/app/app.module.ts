import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { iTodoReducer } from './store/reducers/iTodo.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({todolist: iTodoReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

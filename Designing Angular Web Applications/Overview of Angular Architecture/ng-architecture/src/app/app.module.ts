import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
// import { UsersComponent } from './users/users.component';

// import { HttpClientModule } from '@angular/core/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
// import { NgSharedModule } from 'ng-shared';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './counter.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent, TodosComponent, MyCounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    // NgSharedModule,
    StoreModule.forRoot({
      count: counterReducer,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

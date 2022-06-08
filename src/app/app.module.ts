import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

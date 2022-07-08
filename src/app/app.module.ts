import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchbookComponent,
    ViewbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

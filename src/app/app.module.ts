import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReloadButtonComponent } from './reload-button/reload-button.component';
import { ChangeSubComponent } from './change-sub/change-sub.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReloadButtonComponent,
    ChangeSubComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

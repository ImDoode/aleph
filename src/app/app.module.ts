import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiHttpService } from './core/api-http.service';
import { DashboardComponentController } from './dashboard/dashboard.controller';
import { DashboardComponentViews } from './dashboard/view/dashboard.component';
import { MinersComponent } from './miners/miners.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentController,
    DashboardComponentViews,
    MinersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

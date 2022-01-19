import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiHttpService } from './shared/api-http.service';
import { CurrencyPipe } from './shared/currency.pipe';
import { DashboardComponentController } from './dashboard/dashboard.controller';
import { DashboardComponentViews } from './dashboard/view/dashboard.component';
import { MinersComponent } from './miners/miners.component';
import { CurrencyService } from './shared/currency.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentController,
    DashboardComponentViews,
    MinersComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    ApiHttpService,
    CurrencyService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

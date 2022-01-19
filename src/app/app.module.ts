import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiHttpService } from './shared/api-http.service';
import { CurrencyPipe } from './shared/currency.pipe';
import { DashboardComponentController } from './dashboard/dashboard.controller';
import { DashboardComponentViews } from './dashboard/view/dashboard.component';
import { MinersComponentController } from './miners/miners.controller';
import { CurrencyService } from './shared/currency.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';
import { MinersComponentView } from './miners/view/miners.component';
import { RouterModule } from '@angular/router';
import { MinerPageComponentController } from './miner-page/miner-page.controller';
import { MinerPageComponentView } from './miner-page/view/miner-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentController,
    DashboardComponentViews,
    MinersComponentController,
    MinersComponentView,
    CurrencyPipe,
    MinerPageComponentController,
    MinerPageComponentView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponentController } from './blocks/blocks.controller';
import { DashboardComponentController } from './dashboard/dashboard.controller';
import { MinerPageComponentController } from './miner-page/miner-page.controller';
import { MinersComponentController } from './miners/miners.controller';
import { TICKER_LIST } from './shared/currency.service';


const DEFAULT_TICKER = TICKER_LIST[0];

const routes: Routes = [
  { path: ':ticker/dashboard', component: DashboardComponentController },
  { path: ':ticker/miners', component: MinersComponentController },
  { path: ':ticker/miners/:id', component: MinerPageComponentController },
  { path: ':ticker/blocks', component: BlocksComponentController },
  { path: '',   redirectTo: `${DEFAULT_TICKER}/dashboard`, pathMatch: 'full' },
  { path: '**', redirectTo: `${DEFAULT_TICKER}/dashboard`, pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponentController } from './blocks/blocks.controller';
import { DashboardComponentController } from './dashboard/dashboard.controller';
import { MinerPageComponentController } from './miner-page/miner-page.controller';
import { MinersComponentController } from './miners/miners.controller';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponentController },
  { path: 'miners', component: MinersComponentController },
  { path: 'miners/:id', component: MinerPageComponentController },
  { path: 'blocks', component: BlocksComponentController },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

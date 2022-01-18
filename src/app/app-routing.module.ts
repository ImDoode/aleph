import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentController } from './dashboard/dashboard.controller';
import { MinersComponent } from './miners/miners.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponentController },
  { path: 'miners', component: MinersComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: WrapperComponent,
  children: [
    { path: 'dash', component: DashboardComponent },
    { path: 'info', component: InfoComponent },
    { path: 'user', component: UserComponent },
    { path: '**', redirectTo: 'dash', pathMatch: 'full' },
  ],
},
{ path: '**', redirectTo: 'dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

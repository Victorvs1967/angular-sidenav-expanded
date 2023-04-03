import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialUiModule,
  ],
  declarations: [
    DashboardComponent,
    WrapperComponent,
    InfoComponent,
    UserComponent
  ]
})
export class DashboardModule { }

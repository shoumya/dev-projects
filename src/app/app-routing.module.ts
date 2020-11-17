import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchDashboardComponent } from '../app/launch-dashboard/launch-dashboard.component';
import { ProfileComponent } from '../app/profile/profile.component';
import { LogoutComponent } from '../app/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'spacex/dashboard',
    component: LaunchDashboardComponent
  },
  {
    path: 'spacex/userprofile',
    component: ProfileComponent
  },
  {
    path: 'spacex/logout',
    component: LogoutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

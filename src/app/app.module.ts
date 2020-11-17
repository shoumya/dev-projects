import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchDashboardComponent } from './launch-dashboard/launch-dashboard.component';
import { LaunchpadLocationsMapComponent } from './launchpad-locations-map/launchpad-locations-map.component';
import { LaunchOverTimeComponent } from './launch-over-time/launch-over-time.component';
import { LaunchTimelineComponent } from './launch-timeline/launch-timeline.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { ContentwsDataService } from './shared/contentws-data-service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnalyticsheaderComponent } from './analyticsheader/analyticsheader.component';

// Add the google maps and the charts import over here
import { GoogleMapsModule } from '@angular/google-maps';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDashboardComponent,
    LaunchpadLocationsMapComponent,
    LaunchOverTimeComponent,
    LaunchTimelineComponent,
    ProfileComponent,
    LogoutComponent,
    SiteFooterComponent,
    SidebarComponent,
    AnalyticsheaderComponent,
    LaunchOverTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ChartsModule,
    NgApexchartsModule
  ],
  providers: [ContentwsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

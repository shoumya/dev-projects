import { Component } from '@angular/core';
import { ContentwsDataService } from '../shared/contentws-data-service';
import {
  LaunchTimeLineMicroDetails,
  LaunchYearsChartDataMicroDetails
} from '../shared/interfaces/custom-data-types';

@Component({
  selector: 'app-launch-dashboard',
  templateUrl: './launch-dashboard.component.html',
  styleUrls: ['./launch-dashboard.component.css']
})

export class LaunchDashboardComponent {
  allLaunchesDataLoaded = false;
  pastLaunchesDataLoaded = false;
  launchsPadsDataLoaded = false;
  showAnalyticalDataFor: string;

  upcomingLaunchesInfo = {
    ref: [],
    count: 0
  };

  pastLaunchesInfo = {
    ref: [],
    count: 0
  };

  totalLaunchesInfo = {
    ref: [],
    count: 0
  };

  // for google maps
  launchPads: any[];
  // for the charts
  launchYearsChartData: LaunchYearsChartDataMicroDetails[] = [];
  launchTimeLineChartData: LaunchTimeLineMicroDetails[] = [];

  constructor(private contentws: ContentwsDataService) {
    this.loadAllLaunchesInformation();
    this.loadPastLaunches();
    this.loadLaunchPads();
  }

  loadAllLaunchesInformation(): void {
    this.contentws.fetchAllLaunchesInformation().subscribe((data: any) => {
      console.log('All Launches Data are     ', data);
      // total launches
      this.totalLaunchesInfo.ref = data;
      this.totalLaunchesInfo.count = data.length;
      // build the charts data yearwise
      this.buildLaunchYearsChartData();
      this.buildLaunchTimeChartsData();
      console.log('Launch Years Chart Data     ', this.launchYearsChartData);
      console.log('Launch TimeLine Chart Data     ', this.launchTimeLineChartData);
      // Upcoming launches
      this.upcomingLaunchesInfo.ref = data.filter((ref: any) => {
        return ref.upcoming === true;
      });
      this.upcomingLaunchesInfo.count = this.upcomingLaunchesInfo.ref.length;
      this.allLaunchesDataLoaded = true;
    });
  }

  // arranging the data year wise
  buildLaunchYearsChartData() {
    this.totalLaunchesInfo.ref.forEach((ref) => {
      if (this.launchYearsChartData.length === 0) {
        this.launchYearsChartData.push({
          launchYear: ref.launch_year,
          numberOfLaunches: 1
        });
      } else if (this.launchYearsChartData.length > 0) {
        const findData = this.launchYearsChartData.find((subref) => {
          return ref.launch_year === subref.launchYear;
        });
        if (findData !== undefined) {
          findData.numberOfLaunches++;
        } else if (findData === undefined) {
          this.launchYearsChartData.push({
            launchYear: ref.launch_year,
            numberOfLaunches: 1
          });
        }
      }
    });
  }

  // arranging the data year wise
  buildLaunchTimeChartsData() {
    this.totalLaunchesInfo.ref.forEach((ref) => {
      if (this.launchTimeLineChartData.length === 0) {
        this.launchTimeLineChartData.push({
          launchYear: ref.launch_year,
          launchTimeDetails: [{
            details: ref.details,
            flightNumber: ref.flight_number,
            launcDateUTC: ref.launch_date_utc,
            missonName: ref.mission_name,
            launchSite: ref.launch_site,
          }]
        });
      } else if (this.launchTimeLineChartData.length > 0) {
        const findData = this.launchTimeLineChartData.find((subref) => {
          return ref.launch_year === subref.launchYear;
        });
        if (findData !== undefined) {
          findData.launchTimeDetails.push({
            details: ref.details,
            flightNumber: ref.flight_number,
            launcDateUTC: ref.launch_date_utc,
            missonName: ref.mission_name,
            launchSite: ref.launch_site,
          });
        } else if (findData === undefined) {
          this.launchTimeLineChartData.push({
            launchYear: ref.launch_year,
            launchTimeDetails: [{
              details: ref.details,
              flightNumber: ref.flight_number,
              launcDateUTC: ref.launch_date_utc,
              missonName: ref.mission_name,
              launchSite: ref.launch_site,
            }]
          });
        }
      }
    });
  }

  loadPastLaunches(): void {
    this.contentws.fetchPastLaunches().subscribe((data: any) => {
      // console.log('Past Launches Data are     ', data);
      this.pastLaunchesInfo.ref = data.filter((ref) => {
        return ref.upcoming === false;
      });
      this.pastLaunchesInfo.count = this.pastLaunchesInfo.ref.length;
      this.pastLaunchesDataLoaded = true;
    });
  }

  fetchInfoFor(forState: string): void {
    // console.log('Fetch dta for this state    ', forState);
    this.showAnalyticalDataFor = forState;
  }

  loadLaunchPads(): void {
    this.contentws.fetchLaunchPads().subscribe((data: any) => {
      // console.log('LaunchPads Data are     ', data);
      this.launchPads = data;
      this.launchsPadsDataLoaded = true;
    });
  }

}

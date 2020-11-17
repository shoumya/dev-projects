import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
// import * as moment from 'moment';
import { ChartOptions } from '../shared/interfaces/custom-data-types';
/*
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
}
*/

@Component({
  selector: 'app-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.css']
})

export class LaunchTimelineComponent implements OnInit {
  @Input() launchTimeLineData: any;

  chartData = [];
 
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  // to show the data foer the year 2020
  timeLineYearData: any [] = [];
  renditionYears: any[] = [];
  renditionYear = '2020';

  ngOnInit(): void {
    // console.log('Launch TimeLine data is     ', this.launchTimeLineData);
    this.launchTimeLineData.forEach(element => {
      this.renditionYears.push(element.launchYear);
    });
    this.defineChartData();
  }
  
  defineChartData(): void {
    this.timeLineYearData = this.launchTimeLineData.filter((ref) => {
      return ref.launchYear === this.renditionYear;
    });
    // console.log(this.timeLineYearData[0].launchTimeDetails);
    // console.log(this.timeLineYearData[0].launchYear);
    this.timeLineYearData[0].launchTimeDetails.forEach(element => {
      const dt = {
        x: element.missonName.slice(0, 12),
        y: [
          new Date(element.launcDateUTC.split('T')[0]).getTime(),
          new Date(element.launcDateUTC.split('T')[0]).getTime(),
        ],
        fillColor: '#008FFB'
      };
      this.chartData.push(dt);
    });
    this.setChartConfiguration();
  }

  reRenderChart(year: string): void {
    console.log('Rerender the chart data for the year ', year);
    this.renditionYear = year;
    this.chartData = [];
    this.defineChartData();
  }
  
  setChartConfiguration() {
    this.chartOptions = {
      series: [
        {
          data: this.chartData as any,
        }
      ],
      chart: {
        height: 600,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: false,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter(val, opts) {
          // tslint:disable-next-line: prefer-const
          let label = opts.w.globals.labels[opts.dataPointIndex];
          return label;
        },
        style: {
          colors: ['black', 'white']
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        show: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      grid: {
        row: {
          colors: ['white', 'firebrick'],
          opacity: 1
        }
      }
    };
  }
}

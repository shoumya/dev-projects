import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../shared/interfaces/custom-data-types';

/*
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
}
*/

@Component({
  selector: 'app-launch-over-time',
  templateUrl: './launch-over-time.component.html',
  styleUrls: ['./launch-over-time.component.css']
})

export class LaunchOverTimeComponent implements OnInit {

  @Input() launchYearsChartData: any;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    // console.log('Component input data is     ', this.launchYearsChartData);
    const numLaunches = [];
    const launchYears = [];
    this.launchYearsChartData.forEach(element => {
      numLaunches.push(element.numberOfLaunches);
      launchYears.push(element.launchYear);
    });
    // console.log('Number of launches are     ', numLaunches);
    // console.log('Launch years are     ', launchYears);

    // set the chart options
    this.chartOptions = {
      series: [
        {
          name: 'Count',
          data: numLaunches
        }
      ],
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter(val) {
          return val + '';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758']
        }
      },

      xaxis: {
        categories: launchYears,
        position: 'top',
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter(val) {
            // return val + '%';
            return val + '';
          }
        }
      },
      title: {
        text: 'Space Ship Launch Over Time',
        floating: false,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    };
  }
}

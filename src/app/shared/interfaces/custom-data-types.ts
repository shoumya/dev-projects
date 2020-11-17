import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexFill,
    ApexGrid,
    ApexPlotOptions,
    ApexTitleSubtitle,
    ApexXAxis,
    ApexYAxis
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
    title: ApexTitleSubtitle;
}

export interface LaunchTimeLineMicroDetails {
    launchYear: any;
    launchTimeDetails: [{
        details: any;
        flightNumber: any;
        launcDateUTC: any;
        missonName: any;
        launchSite: any;
    }];
}

export interface LaunchYearsChartDataMicroDetails {
    launchYear: string;
    numberOfLaunches: number;
}

export interface AllLaunches {
    flight_number: number;
    mission_name: string;
    mission_id: [];
    upcoming: false;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: false;
    tentative_max_precision: string;
    tbd: false;
    launch_window: number;
    rocket: any;
    ships: any [];
    telemetry: any;
    launch_site: any;
    launch_success: false;
    launch_failure_details: any;
    links: any;
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: any;
    crew: any;
}

// this file will hold all the observables to load the API data
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AllLaunches } from '../shared/interfaces/custom-data-types';

@Injectable({
    providedIn: 'root'
})

export class ContentwsDataService {

    private host = 'https://api.spacexdata.com/v3';
    private allLaunchData: any[];
    private upcomingLaunchesData: any[];
    private pastLaunchesData: any[];
    private launchPads: any[];

    constructor(private readonly httpClient: HttpClient) {

    }

    fetchAllLaunchesInformation(): Observable<AllLaunches[]> {
        const url = `${this.host}/launches`;
        return this.httpClient.get<any[]>(url, {
            responseType: 'json'
        })
        .pipe(
            tap((data: AllLaunches[]) => {
                this.allLaunchData = data;
                console.log('fetched All Launches data', data);
            }),
            catchError(this.handleError)
        );
    }

    fetchUpcomingLaunches(): Observable<any[]> {
        const url = `${this.host}/launches/upcoming`;
        return this.httpClient.get<any[]>(url, {
            responseType: 'json'
        })
        .pipe(
            tap((data: any[]) => {
                this.upcomingLaunchesData = data;
                console.log('fetched upcoming launches Data', data);
            }),
            catchError(this.handleError)
        );
    }

    fetchPastLaunches(): Observable<any[]> {
        const url = `${this.host}/launches/past`;
        return this.httpClient.get<any[]>(url, {
            responseType: 'json'
        })
        .pipe(
            tap((data: any[]) => {
                this.pastLaunchesData = data;
                console.log('fetched Past launches Data', data);
            }),
            catchError(this.handleError)
        );
    }

    fetchLaunchPads(): Observable<any[]> {
        const url = `${this.host}/launchpads`;
        return this.httpClient.get<any[]>(url, {
            responseType: 'json'
        })
        .pipe(
            tap((data: any[]) => {
                this.launchPads = data;
                console.log('fetched launch pads Data', data);
            }),
            catchError(this.handleError)
        );
    }

    get allLaunchInfo(): any[] {
        return this.allLaunchData;
    }

    get launchPadsInfo(): any[] {
        return this.launchPads;
    }

    get pastLaunchesInfo(): any[] {
        return this.pastLaunchesData;
    }

    get upComingLaunchesInfo(): any[] {
        return this.upcomingLaunchesData;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
    }
}

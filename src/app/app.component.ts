import { Component } from '@angular/core';
import { latestInfoOnSpaceX } from '../app/shared/static-data/site-static-data';

@Component({
  selector: 'app-spacex-visualizer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasPageContentLoaded = false;
  latestInfo = latestInfoOnSpaceX;

  constructor() {
    // tslint:disable-next-line: prefer-const
    const interval = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(interval);
        this.hasPageContentLoaded = true;
      }
    }, 1000);
  }


}



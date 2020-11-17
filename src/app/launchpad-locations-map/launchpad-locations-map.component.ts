import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-launchpad-locations-map',
  templateUrl: './launchpad-locations-map.component.html',
  styleUrls: ['./launchpad-locations-map.component.css']
})
export class LaunchpadLocationsMapComponent implements OnInit, AfterViewInit {

  @Input() launchPadLocationsData: any[] = [];

  markers: any[] = [];
  zoom = 3;
  center: google.maps.LatLngLiteral;
  // center: { };
  options: google.maps.MapOptions = { };

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    console.log('Data has been sent to this component ', this.launchPadLocationsData);
    this.addMarker();
  }

  addMarker() {
    // console.log(this.launchPadLocationsData);
    const latLngData: any[] = [];
    this.launchPadLocationsData.forEach((loc) => {
      latLngData.push({
        lat: loc.location.latitude,
        lng: loc.location.longitude
      });
    });
    // console.log(latLngData);
    this.options = {
      mapTypeId: 'terrain',
      zoomControl: true,
      scrollwheel: false,
      disableDoubleClickZoom: false,
      maxZoom: 15,
      minZoom: 1,
    };
    latLngData.forEach((latLng) => {
      this.markers.push({
        position: {
          lat: latLng.lat + ((Math.random() - 0.5) * 2) / 10,
          lng: latLng.lng + ((Math.random() - 0.5) * 2) / 10,
        },
        label: {
          color: 'blue',
          // text: 'label ' + (this.markers.length + 1),
        },
        // title: 'title ' + (this.markers.length + 1),
        // options: { animation: google.maps.Animation.BOUNCE },
      });
    });
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }


  zoomIn() {
    if (this.zoom < this.options.maxZoom) { this.zoom++; }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) { this.zoom--; }
  }

}

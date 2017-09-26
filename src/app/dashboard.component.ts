import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hero } from './hero';
import { SpotService } from './spots.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
      .selector{
          background: blue;
      }

    `],
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];


  constructor(private spotService: SpotService, private route: ActivatedRoute) { }
      marker = {
        display: true,
        lat: 0,
        lng: 0,
      };
      sub:any;
      city:string;

      lat: number = 40.589971;
      lng: number =  -73.950005;


    //   clicked({target:marker}) {
    //     this.marker.lat = marker.getPosition().lat();
    //     this.marker.lng = marker.getPosition().lng();
      //
    //     marker.nguiMapComponent.openInfoWindow('iw', marker);
      //
    //   }

      hideMarkerInfo() {
        this.marker.display = !this.marker.display;
    }
    getHeroes(): void {
      this.spotService.getSpots().then(heroes => this.heroes = heroes);
    }

  ngOnInit(): void {
        this.getHeroes();

        console.log("jtndniuvns" +this.heroes);
    // this would be to find out to refresh and change the page
    // this.router.navigate['/store/'+productcategory];
  }
}

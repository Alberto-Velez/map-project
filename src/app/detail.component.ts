// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { SpotService } from './spots.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './spot.component.html',
    providers: [SpotService],
    styles: [`
        .spot-images{
            height: 300px;
            background: blue;
        }

        .indv-spot{

        }
        .spot-sidebar{
            display:block;
        }
        .spot-edit input{
            border: none;
            border-bottom: 1px solid black;
            margin-bottom: 15px;
            display: block;
        }
        .spot-edit label{
            padding: 15px 0;
            display: block;
        }
        @media only screen and (max-width: 768px) {
            .spot-sidebar{
                display:none;
            }
            [class*="col-"] {
                width: 100%;
            }
        }
      `],
})
export class DetailComponent implements OnInit {
    constructor(
  private spotService: SpotService,
  private route: ActivatedRoute,
  private location: Location
) {}


marker = {
      display: true,
      lat: 0,
      lng: 0,
    };

    clicked({target:marker}) {
      this.marker.lat = marker.getPosition().lat();
      this.marker.lng = marker.getPosition().lng();

      marker.nguiMapComponent.openInfoWindow('iw', marker);
    }


    hideMarkerInfo() {
      this.marker.display = !this.marker.display;
  }

heroes: Hero[];
nearby:Hero[];
  getHeroes(): void {
    this.spotService.getSpots().then(heroes => this.heroes = heroes);
  }


@Input() hero: Hero;
    ngOnInit(): void {
        // this pulls the id from the params to get the current spot
    this.route.paramMap
    .switchMap((params: ParamMap) => this.spotService.getSpot(+params.get('id')))
    .subscribe(hero => this.hero = hero);

    this.getHeroes();

    }


    // getnearby():void{
    //     this.nearby = this.heroes.filter(h => h.city === "brooklyn, New york");
    //     console.log("ths"+this.nearby[]);
    // }
    goBack(): void {
      this.location.back();
    }

    delete(hero: Hero): void {
    this.spotService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
        });
  }

    save(): void {
    this.spotService.update(this.hero)
      .then(() => this.goBack());
  }


}

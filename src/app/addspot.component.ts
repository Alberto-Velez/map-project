import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { SpotService } from './spots.service';
import { Router }   from '@angular/router';
import { AppRoutingModule }     from './routes/app-routing.module';

@Component({
  selector: 'add-spot',
  template: `
        <div>
            <form novalidate role="form">
              <label>Location Name:</label> <input #name/>
              <label>City:</label> <input  #city />
              <label>Lat:</label> <input  #lat />
              <label>Long:</label> <input  #long />
              <button (click)="add(name.value, city.value, long.value, lat.value);">
                Add
              </button>
            </form>
        </div>
    `,
styles: [`
  `],
  providers: [SpotService]
})
export class AddspotComponent {
  heroes: Hero[];
  constructor(
    private router: Router,
    private heroService: SpotService) { }


hero: Hero;





  add(name: string, city: string, long: number, lat: number ): void {

    if (!name) { return; }
    this.heroService.create(name, city, lat, long);
console.log("thisss"+this.heroes)
//   add(name: String, city: String): void {
//       name= name.trim();
//       console.log("this is " + name);
//
//   if (!name) { return; }
//   this.heroService.create(name, city)
//     .then(hero => {
//       this.heroes.push(hero);
//       this.selectedHero = null;
//     });
    }

}

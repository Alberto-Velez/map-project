import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';
import { SpotService } from './spots.service';
import { Router }   from '@angular/router';
import { AppRoutingModule }     from './routes/app-routing.module';

@Component({
  selector: 'my-heroes',
  template: `
   <br>
   <br>
   <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}<br>
      {{hero.city}} {{hero.latlong}}
      <button class="delete"
    (click)="delete(hero); $event.stopPropagation()">x</button>
    </li>
  </ul>
  <hero-detail></hero-detail>


  <div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
<div>

  <label>City:</label> <input  #city />

  <button (click)="getHero(city.value);">
    Add
  </button>
</div>
`,
styles: [`
    .selector{
        background: blue;
    }
  `],
  providers: [SpotService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: SpotService) { }

  getHeroes(): void {
    this.heroService.getSpots().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 cityHeroes: Hero;
  getHero(id: number):void{

    this.heroService.getSpot(id).then(cityHeroes => this.cityHeroes = this.cityHeroes);

        console.log(this.cityHeroes)

  }

  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}

  gotoDetail(): void {
    this.router.navigate(['/spot', this.selectedHero.id, this.selectedHero.city]);
  }



}

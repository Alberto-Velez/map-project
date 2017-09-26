"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var spots_service_1 = require("./spots.service");
var router_1 = require("@angular/router");
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getSpots().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHero = function (id) {
        var _this = this;
        this.heroService.getSpot(id).then(function (cityHeroes) { return _this.cityHeroes = _this.cityHeroes; });
        console.log(this.cityHeroes);
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/spot', this.selectedHero.id, this.selectedHero.city]);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n   <br>\n   <br>\n   <h1>{{title}}</h1>\n  <h2>My Heroes</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\"\n      [class.selected]=\"hero === selectedHero\"\n      (click)=\"onSelect(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}<br>\n      {{hero.city}} {{hero.latlong}}\n      <button class=\"delete\"\n    (click)=\"delete(hero); $event.stopPropagation()\">x</button>\n    </li>\n  </ul>\n  <hero-detail></hero-detail>\n\n\n  <div *ngIf=\"selectedHero\">\n  <h2>\n    {{selectedHero.name | uppercase}} is my hero\n  </h2>\n  <button (click)=\"gotoDetail()\">View Details</button>\n</div>\n<div>\n\n  <label>City:</label> <input  #city />\n\n  <button (click)=\"getHero(city.value);\">\n    Add\n  </button>\n</div>\n",
        styles: ["\n    .selector{\n        background: blue;\n    }\n  "],
        providers: [spots_service_1.SpotService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        spots_service_1.SpotService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map
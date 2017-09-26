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
// Keep the Input import for now, you'll remove it later:
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var spots_service_1 = require("./spots.service");
var hero_1 = require("./hero");
require("rxjs/add/operator/switchMap");
var DetailComponent = (function () {
    function DetailComponent(spotService, route, location) {
        this.spotService = spotService;
        this.route = route;
        this.location = location;
        this.marker = {
            display: true,
            lat: 0,
            lng: 0,
        };
    }
    DetailComponent.prototype.clicked = function (_a) {
        var marker = _a.target;
        this.marker.lat = marker.getPosition().lat();
        this.marker.lng = marker.getPosition().lng();
        marker.nguiMapComponent.openInfoWindow('iw', marker);
    };
    DetailComponent.prototype.hideMarkerInfo = function () {
        this.marker.display = !this.marker.display;
    };
    DetailComponent.prototype.getHeroes = function () {
        var _this = this;
        this.spotService.getSpots().then(function (heroes) { return _this.heroes = heroes; });
    };
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this pulls the id from the params to get the current spot
        this.route.paramMap
            .switchMap(function (params) { return _this.spotService.getSpot(+params.get('id')); })
            .subscribe(function (hero) { return _this.hero = hero; });
        this.getHeroes();
    };
    // getnearby():void{
    //     this.nearby = this.heroes.filter(h => h.city === "brooklyn, New york");
    //     console.log("ths"+this.nearby[]);
    // }
    DetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailComponent.prototype.delete = function (hero) {
        var _this = this;
        this.spotService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
        });
    };
    DetailComponent.prototype.save = function () {
        var _this = this;
        this.spotService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    return DetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], DetailComponent.prototype, "hero", void 0);
DetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './spot.component.html',
        providers: [spots_service_1.SpotService],
        styles: ["\n        .spot-images{\n            height: 300px;\n            background: blue;\n        }\n\n        .indv-spot{\n\n        }\n        .spot-sidebar{\n            display:block;\n        }\n        .spot-edit input{\n            border: none;\n            border-bottom: 1px solid black;\n            margin-bottom: 15px;\n            display: block;\n        }\n        .spot-edit label{\n            padding: 15px 0;\n            display: block;\n        }\n        @media only screen and (max-width: 768px) {\n            .spot-sidebar{\n                display:none;\n            }\n            [class*=\"col-\"] {\n                width: 100%;\n            }\n        }\n      "],
    }),
    __metadata("design:paramtypes", [spots_service_1.SpotService,
        router_1.ActivatedRoute,
        common_1.Location])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map
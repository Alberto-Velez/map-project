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
var router_1 = require("@angular/router");
var spots_service_1 = require("./spots.service");
var DashboardComponent = (function () {
    function DashboardComponent(spotService, route) {
        this.spotService = spotService;
        this.route = route;
        this.marker = {
            display: true,
            lat: 0,
            lng: 0,
        };
        this.lat = 40.589971;
        this.lng = -73.950005;
    }
    //   clicked({target:marker}) {
    //     this.marker.lat = marker.getPosition().lat();
    //     this.marker.lng = marker.getPosition().lng();
    //
    //     marker.nguiMapComponent.openInfoWindow('iw', marker);
    //
    //   }
    DashboardComponent.prototype.hideMarkerInfo = function () {
        this.marker.display = !this.marker.display;
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.spotService.getSpots().then(function (heroes) { return _this.heroes = heroes; });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
        console.log("jtndniuvns" + this.heroes);
        // this would be to find out to refresh and change the page
        // this.router.navigate['/store/'+productcategory];
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styles: ["\n      .selector{\n          background: blue;\n      }\n      agm-map {\n          height: 300px;\n      }\n    "],
    }),
    __metadata("design:paramtypes", [spots_service_1.SpotService, router_1.ActivatedRoute])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
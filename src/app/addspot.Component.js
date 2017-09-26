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
var AddspotComponent = (function () {
    function AddspotComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    AddspotComponent.prototype.add = function (name, city, long, lat) {
        if (!name) {
            return;
        }
        this.heroService.create(name, city, lat, long);
        console.log("thisss" + this.heroes);
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
    };
    return AddspotComponent;
}());
AddspotComponent = __decorate([
    core_1.Component({
        selector: 'add-spot',
        template: "\n        <div>\n            <form novalidate role=\"form\">\n              <label>Location Name:</label> <input #name/>\n              <label>City:</label> <input  #city />\n              <label>Lat:</label> <input  #lat />\n              <label>Long:</label> <input  #long />\n              <button (click)=\"add(name.value, city.value, long.value, lat.value);\">\n                Add\n              </button>\n            </form>\n        </div>\n    ",
        styles: ["\n  "],
        providers: [spots_service_1.SpotService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        spots_service_1.SpotService])
], AddspotComponent);
exports.AddspotComponent = AddspotComponent;
//# sourceMappingURL=addspot.component.js.map
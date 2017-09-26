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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map"); // lib is large, add only the map operator as result
require("rxjs/add/operator/toPromise");
var SpotService = (function () {
    function SpotService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    SpotService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    // this will get all the locations
    SpotService.prototype.getSpots = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SpotService.prototype.getSpot = function (id) {
        return this.getSpots()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    // this will create a new location
    SpotService.prototype.create = function (name, city, lat, long) {
        var latlong = { value: [lat, long] };
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name, city: city, latlong: latlong.value }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SpotService.prototype.findNearby = function (city) {
        return this.getSpots()
            .then(function (heroes) { return heroes.filter(function (hero) { return hero.city === city; }); });
    };
    SpotService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // handle errors
    SpotService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return SpotService;
}());
SpotService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SpotService);
exports.SpotService = SpotService;
//# sourceMappingURL=spots.service.js.map
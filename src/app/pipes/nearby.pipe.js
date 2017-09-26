"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//this pipe will get nearby spots in the same city
var core_1 = require("@angular/core");
var NearbyPipe = (function () {
    function NearbyPipe() {
    }
    NearbyPipe.prototype.transform = function (value, args, addition1, id) {
        if (!value)
            return value;
        // this will filter for the spots in the same city and has a diffrent id
        value = value.filter(function (item) { return item.city == addition1 && item.id != id; });
        return value;
    };
    return NearbyPipe;
}());
NearbyPipe = __decorate([
    core_1.Pipe({ name: 'nearby' })
], NearbyPipe);
exports.NearbyPipe = NearbyPipe;
//# sourceMappingURL=nearby.pipe.js.map
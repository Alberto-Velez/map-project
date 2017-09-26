"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 87, name: 'quiet zone', city: "portland, oregon", desc: "this is a cool place", lat: 45.481498, long: -122.654575 },
            { id: 11, name: 'Mr. Nice', city: "brooklyn, New york", desc: "this is a not", lat: 40.589971, long: -73.950005 },
            { id: 12, name: 'Narco', city: "brooklyn, New york", desc: "this is a cool place", lat: 40.741895, long: -73.989308 },
            { id: 13, name: 'Bombasto', city: "brooklyn, New york", desc: "this is a cool place", lat: 45.481498, long: -122.654575 }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var detail_component_1 = require("./detail.component");
var heroes_component_1 = require("./heroes.component");
var spots_service_1 = require("./spots.service");
var dashboard_component_1 = require("./dashboard.component");
var app_routing_module_1 = require("./routes/app-routing.module");
var http_1 = require("@angular/http");
var nearby_pipe_1 = require("./pipes/nearby.pipe");
// // for the map
var ngui_1 = require("@ngui/ngui");
var core_2 = require("@agm/core");
var snazzy_info_window_1 = require("@agm/snazzy-info-window");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var addspot_component_1 = require("./addspot.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCqc4ZpnGNnyvdakK5eygfSMFYPpC_4phQ'
            }),
            snazzy_info_window_1.AgmSnazzyInfoWindowModule,
            ngui_1.NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCqc4ZpnGNnyvdakK5eygfSMFYPpC_4phQ' }),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            detail_component_1.DetailComponent,
            addspot_component_1.AddspotComponent,
            heroes_component_1.HeroesComponent,
            nearby_pipe_1.NearbyPipe
        ],
        providers: [
            spots_service_1.SpotService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
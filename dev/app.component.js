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
var core_1 = require('angular2/core');
var weather_list_component_1 = require("./weather/weather-list.component");
var weather_search_component_1 = require("./weather/weather-search.component");
var sidebar_component_1 = require("./sidebar.component");
var facebook_component_1 = require("./facebook.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <header>\n            <h1>Simply Weather</h1>\n        </header>\n        <my-sidebar></my-sidebar>\n        <weather-search></weather-search>\n        <weather-list></weather-list>\n        <my-facebook></my-facebook>\n\n    ",
            directives: [weather_list_component_1.WeatherListComponent, weather_search_component_1.WeatherSearchComponent, sidebar_component_1.SidebarComponent, facebook_component_1.FacebookComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
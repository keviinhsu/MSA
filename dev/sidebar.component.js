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
var core_1 = require("angular2/core");
var profile_service_1 = require("./profile.service");
var weather_service_1 = require("./weather/weather.service");
var weather_item_1 = require("./weather/weather-item");
var SidebarComponent = (function () {
    function SidebarComponent(_profileService, _weatherService) {
        this._profileService = _profileService;
        this._weatherService = _weatherService;
    }
    SidebarComponent.prototype.onSaveNew = function () {
        var cities = this._weatherService.getWeatherItems().map(function (element) {
            return element.cityName;
        });
        this._profileService.saveNewProfile(cities);
    };
    SidebarComponent.prototype.onLoadProfile = function (profile) {
        var _this = this;
        this._weatherService.clearWeatherItems();
        for (var i = 0; i < profile.cities.length; i++) {
            this._weatherService.searchWeatherData(profile.cities[i])
                .retry()
                .subscribe(function (data) {
                var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                _this._weatherService.addWeatherItem(weatherItem);
            });
        }
    };
    SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.profiles = this._profileService.getProfiles();
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'my-sidebar',
            template: "\n        <h3>Saved Profiles</h3>\n        <button (click) = \"onSaveNew()\">Save List to Profile</button>\n        <article class = \"profile\" *ngFor = \"#profile of profiles\" (click) = \"onLoadProfile(profile)\">\n            <h4>{{ profile.profileName }}</h4>\n            <p>Cities: {{ profile.cities.join(', ') }}</p>\n            <span class = \"delete\" (click) = \"onDeleteProfile($event, profile)\">x</span>\n        </article>\n    ",
            styleUrls: ['src/css/sidebar.css'],
            providers: [profile_service_1.ProfileService]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map
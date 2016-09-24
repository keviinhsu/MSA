"use strict";
/// <reference path="../typings/browser.d.ts" />
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require("./app.component");
var http_1 = require("angular2/http");
var weather_service_1 = require("./weather/weather.service");
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, weather_service_1.WeatherService]);
//# sourceMappingURL=boot.js.map
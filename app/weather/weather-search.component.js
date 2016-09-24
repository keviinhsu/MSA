System.register(["./weather.service", "./weather-item", "rxjs/Subject", "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var weather_service_1, weather_item_1, Subject_1, core_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.onSubmit = function () {
                    var weatherItem = new weather_item_1.WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                };
                WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
                    this.searchStream
                        .next(cityName);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.searchStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
                        .subscribe(function (data) { return _this.data = data; });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n        <section class = \"weather-search\"> \n            <form (ngSubmit) = \"onSubmit()\">\n                <label for = \"city\">City</label>\n                <input ngControl = \"location\" type = \"text\" id = \"city\" (input) = \"onSearchLocation(input.value)\" required #input>\n                <button type = \"submit\">Add City</button>\n            </form>\n            <div>\n                <span class = \"info\">City found:</span> {{data.name}}\n            </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUdJLGdDQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUYzQyxpQkFBWSxHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO29CQUM3QyxTQUFJLEdBQVEsRUFBRSxDQUFDO2dCQUdmLENBQUM7Z0JBQ0QseUNBQVEsR0FBUjtvQkFDSSxJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsUUFBZ0I7b0JBQzdCLElBQUksQ0FBQyxZQUFZO3lCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCx5Q0FBUSxHQUFSO29CQUFBLGlCQVFDO29CQVBHLElBQUksQ0FBQyxZQUFZO3lCQUNaLFlBQVksQ0FBQyxHQUFHLENBQUM7eUJBQ2pCLG9CQUFvQixFQUFFO3lCQUN0QixTQUFTLENBQUMsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUE3QyxDQUE2QyxDQUFDO3lCQUMxRSxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FDM0IsQ0FBQztnQkFDVixDQUFDO2dCQXZDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSw2ZkFXVDtxQkFDSixDQUFDOzswQ0FBQTtnQkEwQkYsNkJBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELDJEQXlCQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7V2VhdGhlclNlcnZpY2V9IGZyb20gXCIuL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItc2VhcmNoJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcyA9IFwid2VhdGhlci1zZWFyY2hcIj4gXG4gICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpID0gXCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvciA9IFwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2wgPSBcImxvY2F0aW9uXCIgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJjaXR5XCIgKGlucHV0KSA9IFwib25TZWFyY2hMb2NhdGlvbihpbnB1dC52YWx1ZSlcIiByZXF1aXJlZCAjaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIj5BZGQgQ2l0eTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwiaW5mb1wiPkNpdHkgZm91bmQ6PC9zcGFuPiB7e2RhdGEubmFtZX19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgZGF0YTogYW55ID0ge307XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKSB7XG5cbiAgICB9XG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtID0gbmV3IFdlYXRoZXJJdGVtKHRoaXMuZGF0YS5uYW1lLCB0aGlzLmRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgdGhpcy5kYXRhLm1haW4udGVtcCk7XG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtKTtcbiAgICB9ICBcblxuICAgIG9uU2VhcmNoTG9jYXRpb24oY2l0eU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmVhbVxuICAgICAgICAgICAgLm5leHQoY2l0eU5hbWUpOyBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTdHJlYW1cbiAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoMzAwKVxuICAgICAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKGlucHV0OnN0cmluZykgPT4gdGhpcy5fd2VhdGhlclNlcnZpY2Uuc2VhcmNoV2VhdGhlckRhdGEoaW5wdXQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

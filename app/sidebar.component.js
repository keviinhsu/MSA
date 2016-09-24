System.register(["angular2/core", "./profile.service", "./weather/weather.service", "./weather/weather-item"], function(exports_1, context_1) {
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
    var core_1, profile_service_1, weather_service_1, weather_item_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
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
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJLDBCQUFxQixlQUErQixFQUFVLGVBQStCO29CQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUU3RixDQUFDO2dCQUVELG9DQUFTLEdBQVQ7b0JBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBUyxPQUFvQjt3QkFDbkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFBOUIsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDcEQsS0FBSyxFQUFFOzZCQUNQLFNBQVMsQ0FDTixVQUFBLElBQUk7NEJBQ0EsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDM0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3JELENBQUMsQ0FDSixDQUFDO29CQUNWLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwwQ0FBZSxHQUFmLFVBQWdCLEtBQVksRUFBRSxPQUFnQjtvQkFDMUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkQsQ0FBQztnQkFqREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDhiQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM5QixDQUFDOztvQ0FBQTtnQkFxQ0YsdUJBQUM7WUFBRCxDQXBDQSxBQW9DQyxJQUFBO1lBcENELCtDQW9DQyxDQUFBIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4vcHJvZmlsZVwiO1xuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLWl0ZW1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDM+U2F2ZWQgUHJvZmlsZXM8L2gzPlxuICAgICAgICA8YnV0dG9uIChjbGljaykgPSBcIm9uU2F2ZU5ldygpXCI+U2F2ZSBMaXN0IHRvIFByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgPGFydGljbGUgY2xhc3MgPSBcInByb2ZpbGVcIiAqbmdGb3IgPSBcIiNwcm9maWxlIG9mIHByb2ZpbGVzXCIgKGNsaWNrKSA9IFwib25Mb2FkUHJvZmlsZShwcm9maWxlKVwiPlxuICAgICAgICAgICAgPGg0Pnt7IHByb2ZpbGUucHJvZmlsZU5hbWUgfX08L2g0PlxuICAgICAgICAgICAgPHA+Q2l0aWVzOiB7eyBwcm9maWxlLmNpdGllcy5qb2luKCcsICcpIH19PC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcImRlbGV0ZVwiIChjbGljaykgPSBcIm9uRGVsZXRlUHJvZmlsZSgkZXZlbnQsIHByb2ZpbGUpXCI+eDwvc3Bhbj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2lkZWJhci5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtQcm9maWxlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvZmlsZXM6IFByb2ZpbGVbXTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsIHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgb25TYXZlTmV3KCkge1xuICAgICAgICBjb25zdCBjaXRpZXMgPSB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVySXRlbXMoKS5tYXAoZnVuY3Rpb24oZWxlbWVudDogV2VhdGhlckl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNpdHlOYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2Uuc2F2ZU5ld1Byb2ZpbGUoY2l0aWVzKTtcbiAgICB9XG5cbiAgICBvbkxvYWRQcm9maWxlKHByb2ZpbGU6IFByb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuY2xlYXJXZWF0aGVySXRlbXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmNpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2Uuc2VhcmNoV2VhdGhlckRhdGEocHJvZmlsZS5jaXRpZXNbaV0pXG4gICAgICAgICAgICAgICAgLnJldHJ5KClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtID0gbmV3IFdlYXRoZXJJdGVtKGRhdGEubmFtZSwgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCBkYXRhLm1haW4udGVtcClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlbGV0ZVByb2ZpbGUoZXZlbnQ6IEV2ZW50LCBwcm9maWxlOiBQcm9maWxlKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLl9wcm9maWxlU2VydmljZS5kZWxldGVQcm9maWxlKHByb2ZpbGUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb2ZpbGVzID0gdGhpcy5fcHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZXMoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

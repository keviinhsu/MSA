System.register(['angular2/core', "./weather/weather-list.component", "./weather/weather-search.component", "./sidebar.component", "./facebook.component"], function(exports_1, context_1) {
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
    var core_1, weather_list_component_1, weather_search_component_1, sidebar_component_1, facebook_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_list_component_1_1) {
                weather_list_component_1 = weather_list_component_1_1;
            },
            function (weather_search_component_1_1) {
                weather_search_component_1 = weather_search_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (facebook_component_1_1) {
                facebook_component_1 = facebook_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
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
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsOE9BU1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsaURBQXNCLEVBQUUsb0NBQWdCLEVBQUUsc0NBQWlCLENBQUM7cUJBQ2xHLENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1dlYXRoZXJMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXItbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7V2VhdGhlclNlYXJjaENvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLXNlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7RmFjZWJvb2tDb21wb25lbnR9IGZyb20gXCIuL2ZhY2Vib29rLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT5TaW1wbHkgV2VhdGhlcjwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bXktc2lkZWJhcj48L215LXNpZGViYXI+XG4gICAgICAgIDx3ZWF0aGVyLXNlYXJjaD48L3dlYXRoZXItc2VhcmNoPlxuICAgICAgICA8d2VhdGhlci1saXN0Pjwvd2VhdGhlci1saXN0PlxuICAgICAgICA8bXktZmFjZWJvb2s+PC9teS1mYWNlYm9vaz5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dlYXRoZXJMaXN0Q29tcG9uZW50LCBXZWF0aGVyU2VhcmNoQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50LCBGYWNlYm9va0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

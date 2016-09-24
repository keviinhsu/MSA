System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var FacebookComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FacebookComponent = (function () {
                function FacebookComponent() {
                }
                FacebookComponent = __decorate([
                    core_1.Component({
                        selector: 'my-facebook',
                        template: "\n     <div id=\"fb-root\"></div>   \n     <script>(function(d, s, id) {\n        var js, fjs = d.getElementsByTagName(s)[0];\n        if (d.getElementById(id)) return;\n            js = d.createElement(s); js.id = id;\n        js.src = \"//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7\";\n        fjs.parentNode.insertBefore(js, fjs);\n        }(document, 'script', 'facebook-jssdk'));</script>\n    <div class=\"fb-share-button\" data-href=\"http://microsoftmoduletwo.azurewebsites.net\" data-layout=\"button_count\" data-mobile-iframe=\"true\"><a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmicrosoftmoduletwo.azurewebsites.net%2F&amp;src=sdkpreparse\">Share</a></div>\n",
                        styleUrls: ['src/css/facebook.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FacebookComponent);
                return FacebookComponent;
            }());
            exports_1("FacebookComponent", FacebookComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2Vib29rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFDQSxDQUFDO2dCQWhCQTtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsb3ZCQVVkO3dCQUNELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNqQyxDQUFDOztxQ0FBQTtnQkFFSCx3QkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsaURBQ0MsQ0FBQSIsImZpbGUiOiJmYWNlYm9vay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbiBAQ29tcG9uZW50KHsgXG4gICAgIHNlbGVjdG9yOiAnbXktZmFjZWJvb2snLFxuICAgICB0ZW1wbGF0ZTogYFxuICAgICA8ZGl2IGlkPVwiZmItcm9vdFwiPjwvZGl2PiAgIFxuICAgICA8c2NyaXB0PihmdW5jdGlvbihkLCBzLCBpZCkge1xuICAgICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xuICAgICAgICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XG4gICAgICAgIGpzLnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanMjeGZibWw9MSZ2ZXJzaW9uPXYyLjdcIjtcbiAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuICAgICAgICB9KGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpOzwvc2NyaXB0PlxuICAgIDxkaXYgY2xhc3M9XCJmYi1zaGFyZS1idXR0b25cIiBkYXRhLWhyZWY9XCJodHRwOi8vbWljcm9zb2Z0bW9kdWxldHdvLmF6dXJld2Vic2l0ZXMubmV0XCIgZGF0YS1sYXlvdXQ9XCJidXR0b25fY291bnRcIiBkYXRhLW1vYmlsZS1pZnJhbWU9XCJ0cnVlXCI+PGEgY2xhc3M9XCJmYi14ZmJtbC1wYXJzZS1pZ25vcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9aHR0cCUzQSUyRiUyRm1pY3Jvc29mdG1vZHVsZXR3by5henVyZXdlYnNpdGVzLm5ldCUyRiZhbXA7c3JjPXNka3ByZXBhcnNlXCI+U2hhcmU8L2E+PC9kaXY+XG5gLFxuc3R5bGVVcmxzOiBbJ3NyYy9jc3MvZmFjZWJvb2suY3NzJ11cbiB9KVxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQ29tcG9uZW50IHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

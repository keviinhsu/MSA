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
var FacebookComponent = (function () {
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
exports.FacebookComponent = FacebookComponent;
//# sourceMappingURL=facebook.component.js.map
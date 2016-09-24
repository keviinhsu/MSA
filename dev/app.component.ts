import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";
import {SidebarComponent} from "./sidebar.component";
import {FacebookComponent} from "./facebook.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Simply Weather</h1>
        </header>
        <my-sidebar></my-sidebar>
        <weather-search></weather-search>
        <weather-list></weather-list>
        <my-facebook></my-facebook>

    `,
    directives: [WeatherListComponent, WeatherSearchComponent, SidebarComponent, FacebookComponent]
})
export class AppComponent {
}
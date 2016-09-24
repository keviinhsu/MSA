import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Weather</h1>
        <weather-list></weather-list>
    `,
})
export class AppComponent {

}
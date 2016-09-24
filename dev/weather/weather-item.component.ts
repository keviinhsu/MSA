import {Component} from 'angular2/core';

@Component({
    selector: 'weather-item',
    template: `
        <article>
            <div class = "col-1">
                <h3>CityName</h3>
                <p class = "info">CLOUDS</p>
            </div>
            <div class = "col-2">
                <span class = "temperature">32C</span>
            </div>
        </article>
    `
})
export class WeatherItemComponent { 

}
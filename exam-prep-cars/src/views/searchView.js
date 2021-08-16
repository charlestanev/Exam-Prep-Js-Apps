import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';
import { carTemplate } from './templates/carTemplate.js';

const searchTemplate = (onChange, onSearch, cars = []) => html `
    <!-- Search Page -->
    <section id="search-cars">
        <h1>Filter by year</h1>

        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year" @change=${onChange}>
            <button class="button-list" @click=${onSearch}>Search</button>
        </div>

        <h2>Results:</h2>
        <div class="listings">

            <!-- Display all records -->
            ${cars.map(carTemplate)}

            ${cars.length == 0
                ? html` <p class="no-cars"> No results.</p>`
                : nothing
            }
            <!-- Display if there are no matches -->
        </div>
    </section>
`;

export const renderSearch = (ctx) => {
    let currentSearch = '';

    const onSearchChange = (e) => {
        console.log(e.target.value);
        currentSearch = e.target.value;
    }

    const onSearchClick = (e) => {
        let year = Number(currentSearch);

        carService.getByYear(year)
        .then(cars => {
            ctx.render(searchTemplate(onSearchChange, onSearchClick, cars));
        })
    }

    ctx.render(searchTemplate(onSearchChange, onSearchClick));

}
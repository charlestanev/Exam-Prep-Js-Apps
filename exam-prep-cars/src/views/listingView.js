import { html } from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';

const carTemplate = (car) => html `
    <!-- Display all records -->
<div class="listing">
    <div class="preview">
        <img src="${car.imageUrl}">
    </div>
        <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price}$</h3>
        </div>
        <div class="data-buttons">
            <a href="/listing/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`;

const noCarInDB = () => html `
<!-- Display if there are no records -->
<p class="no-cars">No cars in database.</p>
`;

const listingTemplate = (cars = []) => html `
    <!-- All Listings Page -->
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">

            ${cars.map(carTemplate)}
                
            ${cars.length == 0
            ? noCarInDB
            :''
            }

        </div>
        </section>
`;

export const renderListing = (ctx) => {
    carService.getAll()
        .then(cars => {
            console.log(cars);
            ctx.render(listingTemplate(cars));
        });

}
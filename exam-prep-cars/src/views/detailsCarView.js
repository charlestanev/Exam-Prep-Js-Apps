import { html } from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';

const privateButons = (carID) => html `
    <div class="listings-buttons">
        <a href="/listing/${carID}/edit" class="button-list">Edit</a>
        <a href="/listing/${carID}/delete" class="button-list">Delete</a>
    </div>
`;

const detailsCarTemplate = (car, showButtons) => html `
    <!-- Listing Details Page -->
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src="${car.imageUrl}">
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${car.brand}</li>
                <li><span>Model:</span>${car.model}</li>
                <li><span>Year:</span>${car.year}</li>
                <li><span>Price:</span>${car.price}$</li>
            </ul>

            <p class="description-para">${car.description}</p>

            ${showButtons && privateButons(car._id)}

        </div>
    </section>
`;

export const renderCarDetails = (ctx) => {
    carService.getOne(ctx.params.carId)
        .then(car => {
            let showButtons = Boolean(ctx.user) && car._ownerId == ctx.user._id;

            ctx.render(detailsCarTemplate(car, showButtons));
        });
}
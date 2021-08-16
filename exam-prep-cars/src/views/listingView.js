import { html } from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';
import { carTemplate } from './templates/carTemplate.js';


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

// const listingTemplate = (cars = []) => html `
//     <!-- All Listings Page -->
//     <section id="car-listings">
//         <h1>Car Listings</h1>
//         <div class="listings">

//             <!-- Dysplay All Records -->
//             ${cars.map(carTemplate)}

//             <!-- Dysplay if there are no records -->
//             ${cars.length == 0
//                 ? html`<p class="no-cars">No cars in database.</p>`
//                 : nothing
//             }

//         </div>
//     </section>
// `;

export const renderListing = (ctx) => {
    carService.getAll()
        .then(cars => {
            console.log(cars);
            ctx.render(listingTemplate(cars));
        });

}
import * as carService from "../services/carService.js";

export const renderDeleteCar = (ctx) => {
    const carId = ctx.params.carId;

    if (confirm('Are you sure you want to delete it?')) {
        carService.getOne(carId)
            .then(car => {
                if (car._ownerId != ctx.user._id) {
                    ctx.page.redirect('/listing');
                    throw 'Car ownership failed!';
                }

                return carService.del(carId);
            })
            .then(() => ctx.page.redirect('/listing'));
    }
}
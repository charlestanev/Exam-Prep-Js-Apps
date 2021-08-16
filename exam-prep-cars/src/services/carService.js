import * as api from './api.js';
import * as request from './requester.js';


export const getAll = () => request.get(`${api.cars}?sortBy=_createdOn%20desc`);

export const getOwn = (userId) => request.get(`${api.cars}?where=_ownerId%3D%22${userId}%22&amp;sortBy=_createdOn%20desc`);

export const getByYear = (year) => request.get(`${api.cars}?where=year%3D${year}`);

export const getOne = (id) => request.get(`${api.cars}/${id}`);

export const create = (car) => request.post(api.cars, car);

export const update = (id, car) => request.put(`${api.cars}/${id}`, car);

export const del = (id) => request.del(`${api.cars}/${id}`);
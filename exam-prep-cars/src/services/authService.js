import * as api from './api.js';
import * as request from './requester.js';

const USER_KEY = 'user';

// login api
export const login = (username, password) => {
    return request.post(api.login, { username, password })
        .then(user => {
            saveUser(user);
            return user;
        });
};

// register api
export const register = (username, password) => {
    return request.post(api.register, { username, password })
        .then(user => {
            saveUser(user);
            return user;
        })
};

export const logout = () => {

    return request.get(api.logout)
        .finally(destroySession);
};

// data:
// {username: 'Peter', _id: '35c62d76-8152-4626-8712-eeb96381bea8', accessToken: 'e140637514331a14ed0dc2f21b5b78d4e8b77833622b0551c6014b9e0354a33a'}
// accessToken: "e140637514331a14ed0dc2f21b5b78d4e8b77833622b0551c6014b9e0354a33a"
// username: "Peter"
// _id: "35c62d76-8152-4626-8712-eeb96381bea8"
// [[Prototype]]: Object

// save user
function saveUser(data) {
    localStorage.setItem(USER_KEY, JSON.stringify(data));
}

function destroySession() {
    localStorage.removeItem(USER_KEY);
}

// get user
export function getUser() {
    try {
        let user = localStorage.getItem(USER_KEY);

        if (user) {
            return JSON.parse(user);
        }
    } catch (error) {
        return undefined;
    }
}
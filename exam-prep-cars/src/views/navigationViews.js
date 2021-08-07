import { html } from '../../node_modules/lit-html/lit-html.js';

// make f for NOT- logged in nav- Guest users
const guestUserNavigation = () => html `
<!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

// make f for logged in nav
const loggedUserNavigation = () => html `
<!-- Logged users -->
    <div id="profile">
        <a>Welcome username</a>
        <a href="#">My Listings</a>
        <a href="#">Create Listing</a>
        <a href="#">Logout</a>
    </div>
`;

const navigationTemplate = () => html `
    <nav>
        <a class="active" href="/">Home</a>
        <a href="#">All Listings</a>
        <a href="#">By Year</a>
        ${guestUserNavigation()}
    </nav>
`;

export const renderNavigation = (ctx) => {

    return navigationTemplate();
}
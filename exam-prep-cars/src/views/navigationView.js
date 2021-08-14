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
const loggedUserNavigation = (username) => html `
<!-- Logged users -->
    <div id="profile">
        <a>Welcome ${username}</a>
        <a href="/profile">My Listings</a>
        <a href="/create">Create Listing</a>
        <a href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (user) => html `
    <nav>
        <a class="active" href="/home">Home</a>
        <a href="/listing">All Listings</a>
        <!-- <a href="/catalog">All Listings</a> -->
        <a href="#">By Year</a>
        ${user
            ? loggedUserNavigation(user.username)
            : guestUserNavigation()}
    </nav>
`;

export const renderNavigation = ({ user }) => {

    return navigationTemplate(user);
}
import { render } from '../../node_modules/lit-html/lit-html.js'

// 1 import result from navView - renderNavigation
import { renderNavigation } from '../views/navigationView.js';


const navigationElement = document.querySelector('header.navigation');

export function navigationMiddleware(ctx, next) {


    // rendering navigation into navigationElement with context so we can use context
    render(renderNavigation(ctx), navigationElement);
    next();
}
import page from '../node_modules/page/page.mjs';

// import navigationMiddleware
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';

page(navigationMiddleware);

page('/', () => console.log('loaded'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));

page.start();
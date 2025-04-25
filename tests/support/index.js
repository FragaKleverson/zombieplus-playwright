const { test: base, expect } = require('@playwright/test');

import { LandingPage } from '../pages/LandingPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { Toast } from '../pages/Components.js';
import { MooviePage } from '../pages/MooviePage.js';

const test = base.extend({
    page: async ({ page }, use) => {
        await use({
            ...page,
            landing: new LandingPage(page), 
            login: new LoginPage(page),
            movies: new MooviePage(page),
            toast: new Toast(page)
        })
    }
})

export { test, expect }
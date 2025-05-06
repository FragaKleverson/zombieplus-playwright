const { test: base, expect } = require('@playwright/test');

import { Leads } from './actions/Leads.js';
import { Login } from './actions/Login.js';
import { Toast } from './actions/Components.js';
import { Movies } from './actions/Movies.js';


const test = base.extend({
    page: async ({ page }, use) => {

        const context = page

        context['leads'] = new Leads(page)
        context['login'] = new Login(page)
        context['toast'] = new Toast(page)
        context['movies'] = new Movies(page)

        await use(context)



    }
})

export { test, expect }
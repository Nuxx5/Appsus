import homePage from './pages/home-page.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import keepDetails from './apps/keep/pages/keep-details.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js'
import emailDetails from './apps/mail/pages/email-details.cmp.js'
import about from './pages/about.cmp.js'

const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/keep/:noteId',
        component: keepDetails
    },
    {
        path: '/mail',
        component: emailApp
    },
    {
        path: '/mail/:emailId',
        component: emailDetails
    },
]

export const myRouter = new VueRouter({ routes })
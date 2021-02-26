import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';
// import appFooter from './cmps/app-footer.cmp.js';
import { myRouter } from './routes.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <user-msg />
            <app-header />
            <router-view />
            <!-- <app-footer /> -->
        </section>
    `,
    components: {
        appHeader,
        userMsg
        // appFooter,
    }
}

const app = new Vue(options)


import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';
import { myRouter } from './routes.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
        <div class="main-screen" :class="menuOpen" @click="toggleMenu"></div>
            <user-msg />
            <app-header />
            <router-view />
        </section>
    `,
    data() {
        return {
            menuOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    },
    components: {
        appHeader,
        userMsg
    }
}

const app = new Vue(options)


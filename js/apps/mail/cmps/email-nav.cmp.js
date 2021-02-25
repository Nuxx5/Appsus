import emaiCompose from '../pages/email-compose.cmp.js';


export default {
    name: 'email-nav',
    template: `
    <div class="email-nav">
                <router-link class="email-compose-btn" to="/mail/add">Compose</router-link>
                <router-link class="email-nav-btn" to="/mail">Inbox</router-link>
                <router-link class="email-nav-btn" to="/mail/starred">Starred</router-link>
                <router-link class="email-nav-btn" to="/mail/sent">Sent mail</router-link>
                <router-link class="email-nav-btn" to="/mail/draft">Draft</router-link>
            </div>
    `,
    components: {
        emaiCompose,
    }
}
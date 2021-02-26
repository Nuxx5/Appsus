// import emailCompose from '../pages/email-compose.cmp.js';


export default {
    name: 'email-nav',
    template: `
    <div class="email-nav">
                <router-link class="email-compose-btn" to="/mail/add">Compose</router-link>
                <router-link class="email-nav-btn" to="/mail">Inbox</router-link>
                <button @click="setNavFilter('inbox')">Inbox</button>
                <button @click="setNavFilter('starred')">Starred</button>
                <button @click="setNavFilter('sent')">Sent Mail</button>
                <button @click="setNavFilter('trash')">Trash</button>


                <router-link class="email-nav-btn" to="/mail/starred">Starred</router-link>
                <router-link class="email-nav-btn" to="/mail/sent">Sent mail</router-link>
                <router-link class="email-nav-btn" to="/mail/draft">Draft</router-link>
            </div>
    `,
    data() {
        return {
            navFilterBy: '',
        }
    },
    methods: {
        setNavFilter(filter) {
            this.navFilterBy = filter;
            console.log('setNavFilter', this.navFilterBy);
            this.$emit('navFiltered', this.navFilterBy)
        },
    },
    components: {
        // emailCompose,
    }
}
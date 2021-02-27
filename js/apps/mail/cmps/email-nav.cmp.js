// import emailCompose from '../pages/email-compose.cmp.js';


export default {
    name: 'email-nav',
    template: `
    <div class="email-nav">
                <router-link to="/mail/add">
                    <button class="email-compose-btn"><span>+</span>Compose</button>
                </router-link>
                <router-link to="/mail">
                    <button class="email-nav-btn" @click="setNavFilter('inbox')">Inbox</button>
                </router-link>
                <button class="email-nav-btn" @click="setNavFilter('starred')">Starred</button>
                <button class="email-nav-btn" @click="setNavFilter('sent')">Sent Mail</button>
                <button class="email-nav-btn" @click="setNavFilter('trash')">Trash</button>


                <!-- <router-link class="email-nav-btn" to="/mail/starred">Starred</router-link> -->
                <!-- <router-link class="email-nav-btn" to="/mail/sent">Sent mail</router-link> -->
                <!-- <router-link class="email-nav-btn" to="/mail/draft">Draft</router-link> -->
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
            this.$emit('navFiltered', this.navFilterBy)
        },
    },
    components: {
        // emailCompose,
    }
}
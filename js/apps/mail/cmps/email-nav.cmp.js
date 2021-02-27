export default {
    name: 'email-nav',
    template: `
    <section class="main-email-nav">
        <button class="menu-btn" :class="menuOpen" @click="toggleMenu">☰</button>
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
        </div>
    </section>
    `,
    data() {
        return {
            navFilterBy: '',
            menuOpen: false,
        }
    },
    methods: {
        setNavFilter(filter) {
            this.navFilterBy = filter;
            this.$emit('navFiltered', this.navFilterBy)
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    },
    components: {
    }
}
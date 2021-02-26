import appFooter from '../cmps/app-footer.cmp.js';

export default {
    template:`
    <section class="home-page">
        <h1 class="home-text">Appsus</h1>
        <p>Welcome to your new digital orgaziner!<i class="fab fa-accessible-icon"></i></p>
        <app-footer />
    </section>
    `,
    components: {
        appFooter
    }
}
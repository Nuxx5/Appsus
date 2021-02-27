import appFooter from '../cmps/app-footer.cmp.js';

export default {
    template:`
    <section class="home-page">
        <div class="home-text">
        <h1>Appsus</h1>
        <br/>
        <p>Welcome to your new digital orgaziner!</p>
        </div>
        <app-footer />
    </section>
    `,
    components: {
        appFooter
    }
}
import appFooter from '../cmps/app-footer.cmp.js';

export default {
    name: 'about',
    template: `
    <section class="about">
        <h1>About</h1>
        <p>
            Ran and Bari
        </p>
        <app-footer />
    </section>`,
    components: {
        appFooter
    }
}

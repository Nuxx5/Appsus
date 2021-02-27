import appFooter from '../cmps/app-footer.cmp.js';

export default {
    name: 'about',
    template: `
    <section class="about">
        <div class="about-text">
            <h1>About</h1>
            <br/>
        <p>
            Ran Porath and Bari Avni are Coding Academy fullstack development students who just recently started developing apps and webpages.
            <br/>
            <br/>
            Bari likes to travel in the outdoors, enjoys watching football and coding.
            Ran likes to watch and play basketball, watch movies and program.
        </p>
        </div>
        <app-footer />
    </section>`,
    components: {
        appFooter
    }
}

export default {
    props: ['note'],
    template: `
        <section class="keep-img">
        <img class="img-note" :src="note.contents" width="300" height="300" alt="error loading image">
</section>`,
}

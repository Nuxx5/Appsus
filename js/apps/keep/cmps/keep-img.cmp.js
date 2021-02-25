export default {
    props: ['note'],
    template: `
        <section class="keep-img">
        <img class="img-note" :src="note.contents" width="50" height="60" alt="error loading image">
</section>`,

}

export default {
    name: 'keep-preview',
    props: ['note'],
    template: `
    <section class="email-preview">
        <p  class="read">{{note.id}}</p>
    </section>`}
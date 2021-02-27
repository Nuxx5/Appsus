import { keepService } from "../services/keep.service.js";

export default {
    name: 'keep-details',
    template: `
    <section v-if="note" class="keep-details">
        <p>{{note.info.txt}}</p>
        <router-link to="/keep">Back</router-link>
    </section>
    `,
    data() {
        return {
            note: null,
        }
    },

    methods: {
        loadNote() {
            const id = this.$route.params.noteId
            keepService.getById(id)
                .then(note => {
                    this.note = note
                })

        },
        remove(noteId) {
            keepService.remove(noteId)
                .then(this.loadNote())
        }
    },
    created() {
        this.loadNote()
    },
}

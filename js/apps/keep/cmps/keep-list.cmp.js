import keepPreview from './keep-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
    <ul class="note-list">
        <li v-for="note in notes" :key="note.id" class="note-preview-container" >
            <keep-preview :note="note" @click.native="logId(note.id)" />
            <div class="btns-container">
                <button @click="remove(keep.id)">X</button>
                <!-- <button @click="select(note)">Details</button> -->
                <router-link :to="'/keep/'+keep.id">Details</router-link>
            </div>
        </li>
    </ul>
    `,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        select(note) {
            this.$emit('selected', note)
        },
        logId(noteId) {
            console.log('Id is', noteId);
        }
    },
    components:{
        keepPreview
    }
}

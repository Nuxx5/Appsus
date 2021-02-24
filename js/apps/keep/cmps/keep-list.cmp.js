import keepPreview from './keep-preview.cmp.js'

export default {
    name: 'keep-list',
    props: ['notes'],
    template: `
    <ul class="note-list">
        <li v-for="note in notes" :key="note.id" class="note-preview-container" >
            <div class="btns-container">
                 <p>{{note.id}}</p>
                <button @click="remove(note.id)">X</button>
                <!-- <button @click="select(note)">Details</button> -->
                <!-- @click.native="logId(note.id)" -->
                <router-link :to="'/keep/'+note.id">Details</router-link>
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
    },
    created() {
        console.log(this.notes);
    }
}

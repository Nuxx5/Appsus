import keepPreview from './keep-preview.cmp.js'
import keepTxt from '../cmps/keep-txt.cmp.js';
import keepImg from '../cmps/keep-img.cmp.js';
import keepTodo from '../cmps/keep-todo.cmp.js';
import keepVideo from '../cmps/keep-video.cmp.js';
import keepAudio from '../cmps/keep-audio.cmp.js';

export default {
    name: 'keep-list',
    props: ['notes'],
    template: `
    <ul class="keep-list grid">
        <li v-for="note in notes" :key="note.id" class="note-preview-container" >
            <div class="note-container btns-container">
                <!-- <p>{{note.contents}}</p> -->
                <component :is="'keep'+note.type" :note="note"></component>
                <button class="remove-btn" @click="remove(note.id)">🗑️</button>
                <!-- <button @click="select(note)">Details</button> -->
                <!-- @click.native="logId(note.id)" -->
                <!-- <router-link :to="'/keep/'+note.id">Details</router-link> -->
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
        keepPreview,
        keepTxt,
        keepImg,
        keepVideo,
        keepTodo,
        keepAudio
    },
    created() {
        console.log(this.notes);
    }
}

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
            <div class="note-container btns-container" :style="setColor(note)">
                <!-- <p>{{note.contents}}</p> -->
                <component :is="'keep'+note.type" :note="note" :style="setColor(note)"></component>
                <button v-if="note.isPinned" class="pin-btn" @click="pin(note, note.id)" title="unpin note">📌</button>
                <button v-if="!note.isPinned" class="pin-btn" @click="pin(note, note.id)" title="pin note">⭐</button>
                <button class="remove-btn" @click="remove(note, note.id)" title="remove note">🗑️</button>
                <input type="color" @input="changeColor(note, $event)">
                <!-- @click.native="logId(note.id)" -->
                <!-- <router-link :to="'/keep/'+note.id">Details</router-link> -->
            </div>
        </li>
    </ul>
    `,
    data() {
        return {
            bgcColor: null,
        }
    },
    methods: {
        remove(note, noteId) {
            if (note.isPinned) return
            this.$emit('remove', noteId)
        },
        select(note) {
            this.$emit('selected', note)
        },
        logId(noteId) {
            console.log('Id is', noteId);
        },
        changeColor(note, e) {
            note.color = e.target.value
            this.$emit('updated', note)
        },
        setColor(note) { 
            return {'background-color': note.color}
        },
        pin(note, noteId) {
            note.isPinned = !note.isPinned
            if (note.isPinned) this.$emit('pinned', noteId)
        }
        
    },
    components: {
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

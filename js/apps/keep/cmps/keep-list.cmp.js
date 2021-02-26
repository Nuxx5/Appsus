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
            <div class="note-container btns-container" :style="setColor">
                <!-- <p>{{note.contents}}</p> -->
                <component :is="'keep'+note.type" :note="note" :style="setColor"></component>
                <button class="remove-btn" @click="remove(note.id)">🗑️</button>
                <input type="color" @input="changeColor($event)">
                <!-- @click.native="logId(note.id)" -->
                <!-- <router-link :to="'/keep/'+note.id">Details</router-link> -->
            </div>
        </li>
    </ul>
    `,
    data() {
        return {
            bgcColor: null,
            color: {
                code: null,
            }
        }
    },
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        select(note) {
            this.$emit('selected', note)
        },
        logId(noteId) {
            console.log('Id is', noteId);
        },
        changeColor(e) {
            this.color.code = e.target.value
            console.log(e)
            console.log(e.target.value)
        }
    },
    computed: {
        setColor() {
            return {
                'background-color': this.color.code
            }
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

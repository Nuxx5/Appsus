import { keepService } from '../services/keep.service.js'
import keepTxt from '../cmps/keep-txt.cmp.js';
import keepImg from '../cmps/keep-img.cmp.js';
import keepTodo from '../cmps/keep-todo.cmp.js';
import keepVideo from '../cmps/keep-video.cmp.js';

export default { 
    name: 'keep-compose',
    template: `
        <section class="keep-compose">
            <input class="keep-input" v-model="note.contents"
                placeholder="Add a new note" @keyup.enter="saveNote">
            <div class="btn-container">
                <button class="compose-btn" @click="changeType('Txt')">📝</i></button>
                <button class="compose-btn" @click="changeType('Img')">🖼️</i></button>
                <button class="compose-btn" @click="changeType('Todo')">📋</i></button>
                <button class="compose-btn" @click="changeType('Video')">🎦</i></button>
                <button class="compose-btn" @click="saveNote()">💾</i></button>
            </div>
        </section> 
    `,
     data() {
        return {
            note: {
                contents: null,
                type: 'txt'
            },
        }
    },
    methods: {
        changeType(type) {
            this.note.type = type
        },
        saveNote() {
            keepService.save(this.note)
            .then(() => (this.$emit('loadNotes')) )
        }
    },
    components: {
        keepTxt,
        keepImg,
        keepTodo,
        keepVideo,
    }
}
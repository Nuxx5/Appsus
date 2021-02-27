import { keepService } from '../services/keep.service.js'
import { eventBus } from '../../../services/event-bus.service.js';
import keepTxt from '../cmps/keep-txt.cmp.js';
import keepImg from '../cmps/keep-img.cmp.js';
import keepTodo from '../cmps/keep-todo.cmp.js';
import keepVideo from '../cmps/keep-video.cmp.js';
import keepAudio from '../cmps/keep-audio.cmp.js';

export default { 
    name: 'keep-compose',
    template: `
        <section class="keep-compose">
            <input class="keep-input" onfocus="value=''" v-model="note.contents"
                :placeholder="placeholderContents" @keyup.enter="saveNote">
            <div class="btn-container">
                <button title="text" class="compose-btn" @click="changeType('Txt')"><i class="far fa-file-alt"></i></i></button>
                <button title="image" class="compose-btn" @click="changeType('Img')"><i class="far fa-image"></i></i></button>
                <button title="to-do" class="compose-btn" @click="changeType('Todo')"><i class="far fa-list-alt"></i></i></button>
                <button title="video" class="compose-btn" @click="changeType('Video')"><i class="fab fa-youtube"></i></i></button>
                <button title="audio" class="compose-btn" @click="changeType('Audio')"><i class="fas fa-volume-up"></i></i></button>
                <button title="save" class="compose-btn" @click="saveNote()"><i class="far fa-save"></i></i></button>
            </div>
        </section> 
    `,
     data() {
        return {
            note: {
                type: 'txt',
                isPinned: false,
                color: 'white',
                contents: null,
            },
            placeholderContents: 'write your note here'
        }
    },
    methods: {
        changeType(type) {
            this.note.type = type
            if (type === 'Txt') this.placeholderContents = 'write your note here'
            else if (type === 'Img') this.placeholderContents = 'insert image url'
            else if (type === 'Todo') this.placeholderContents = 'write your to-do list'
            else if (type === 'Video') this.placeholderContents = 'insert Youtube url'
            else if (type === 'Audio') this.placeholderContents = 'insert mp3 url'
            if (this.note.contents) this.saveNote()
        },
        saveNote() {
            keepService.save(this.note)
            .then(() => this.note.contents = null)
            .then(note => {
                console.log('Saved note:', note);
                const msg = {
                    txt: 'Note saved successfully',
                    type: 'success'
                }
                eventBus.$emit('show-msg', msg)
                this.$emit('loadNotes')
            })
            .catch(err => {
                console.log(err);
                const msg = {
                    txt: 'Error, please try again later',
                    type: 'error'
                }
                eventBus.$emit('show-msg', msg)
            })
            // .then(() => (this.$emit('loadNotes')) )
            

        }
    },
    components: {
        keepTxt,
        keepImg,
        keepTodo,
        keepVideo,
        keepAudio
    }
}
import { keepService } from '../services/keep.service.js'

export default { 
    name: 'keep-compose',
    template: `
        <section class="keep-compose">
            <input class="keep-input" v-model="note.data"
                placeholder="Add a new note" @click="saveNote">
            <div class="btn-container">
                <button class="keep-compose-btn txt-btn" @click="setKeepType('txt')">📝</i></button>
                <button class="keep-compose-btn img-btn" @click="setKeepType('img')">🖼️</i></button>
                <button class="keep-compose-btn todo-btn" @click="setKeepType('todo')">📋</i></button>
                <button class="keep-compose-btn img-btn" @click="setKeepType('video')">🎦</i></button>
            </div>
        </section> 
    `,
     data() {
        return {
            note: null
        }
    },
}
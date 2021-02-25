import { keepService } from '../services/keep.service.js'

export default {
    name: 'keep-txt',
    props: ['keep'],
    template: `
    <section class="keep-txt">
        <textarea class="keep-txtarea" id="text-area" v-if="note" v-model="note.txt" ref="textarea" :style="bgcChange" @click="editNote" @blur="saveNote">

        </textarea>
        </section> 
    `,
    data() {
        return {
           note: null,
           isEdit: false
        }
    },
    methods: {
        editNote() {
             this.editMode = true
        },
        saveNote() {
            if (this.editMode === true) {
                keepService.edit(this.note)
                this.editMode = false
            }  
        },
    },
    created() {
        this.note = this.keep
    },
 
}   
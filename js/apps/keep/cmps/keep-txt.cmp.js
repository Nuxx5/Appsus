import { keepService } from '../services/keep.service.js'

export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section @click="editNote" class="keep-txt">
        {{note.contents}}>
        <textarea class="keep-txtarea" rows="16" cols="60" id="text-area" v-if="edit" v-model="note.contents" ref="textarea"  @blur="saveNote">
        
        </textarea>
        </section> 
    `,
    data() {
        return {
        //    note: null,
           edit: false
        }
    },
    methods: {
        editNote() {
             this.edit = true
        },
        saveNote() {
            if (this.edit === true) {
                keepService.edit(this.note)
                .then(() => this.edit = false)
            }  
        },
    },
    // created() {
    //     this.note = this.keep
    // },
 
}   
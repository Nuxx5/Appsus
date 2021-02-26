import { keepService } from '../services/keep.service.js'

export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section @click="editNote" class="keep-txt">
        <span v-if="!edit">{{note.contents}}</span>
        <textarea class="keep-textarea" rows="15" cols="45" id="text-area" v-if="edit" v-model="note.contents" ref="textedit" @click="focus"  @blur="saveNote">
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
        focus() {
            this.$refs.textedit.focus()
        }
    },
    // mounted() {
    //     this.$refs.textedit.focus()
    // }
    // created() {
    //     this.note = this.keep
    // },
 
}   

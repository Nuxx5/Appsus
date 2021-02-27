import { keepService } from '../services/keep.service.js'
import longText from '../../../cmps/long-text.cmp.js';

export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section @click="editNote" class="keep-txt">
        <long-text class="long-text" v-if="!edit" :txt="note.contents" />
        <textarea class="keep-textarea" rows="15" cols="45" id="text-area" v-if="edit" v-model="note.contents" ref="textedit" @click="focus"  @blur="saveNote">
        </textarea>
        </section> 
    `,
    data() {
        return {
            edit: false,
            bgcColor: null,
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
        },
    },
    components: {
        longText
    }
}
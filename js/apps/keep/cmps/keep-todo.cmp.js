import { keepService } from '../services/keep.service.js'
import longText  from '../../../cmps/long-text.cmp.js';

export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section @click="editNote" class="keep-txt">
        <!-- <span v-if="!edit">{{note.contents}}</span> -->
        <long-text class="long-text" v-if="!edit" :txt="note.contents" />
        <textarea class="keep-textarea" rows="15" cols="45" id="text-area" v-if="edit" v-model="note.contents" ref="textedit" @click="focus"  @blur="saveNote">
        </textarea>
        <!-- <input v-if="edit" type="color" @input="changeColor($event)"> -->
        </section> 
    `,
    data() {
        return {
        //    note: null,
           edit: false,
           bgcColor: null,
        //    color: {
        //        code: null
        //    }
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
                console.log(this.bgcColor)
            }  
        },
        focus() {
            this.$refs.textedit.focus()
        },
        // changeColor(e) {
        //     this.color.code = e.target.value
        //     console.log(e)
        //     console.log(e.target.value)
        // }
    },
    // computed: {
    //     setColor() {
    //     return {
    //         'background-color': this.color.code
    //     }
    // }
// },
    components : {
        longText
    }
    
    // mounted() {
    //     this.$refs.textedit.focus()
    // }
    // created() {
    //     this.note = this.keep
    // },
 
}
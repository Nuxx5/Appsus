import { keepService } from '../services/keep.service.js'
import { eventBus } from '../../../services/event-bus.service.js';
import keepFilter from '../cmps/keep-filter.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepDetails from './keep-details.cmp.js'
import keepCompose from './keep-compose.cmp.js'

export default { 
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <keep-filter @filtered="setFilter" />
            <keep-compose @loadNotes="loadNotes"/>
            <!-- <router-link to="/keep/add">Add a new note!</router-link> -->
            <keep-list :notes="notesToShow" @selected="selectNote" @remove="removeNote" @updated="updateNote" @pinned="pinNote" />
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> -->
            <!-- <book-edit /> -->
        </section>
    `,
    data() {
        return {
            notes: [],
            selectedNote: null,
            filterBy: null
        }
    },
    methods: {
        loadNotes() {
            console.log('loadNotes');
            keepService.query()
            .then(notes => this.notes = notes)
            console.log('notes', this.notes);
        },
        updateNote(note) {
            keepService.edit(note)
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
        },
        removeNote(noteId) {
            keepService.remove(noteId)
            .then(note => {
                console.log('deleted note:', note);
                const msg = {
                    txt: 'Note deleted successfully',
                    type: 'success'
                }
                eventBus.$emit('show-msg', msg)
                this.loadNotes()
            })
            .catch(err => {
                console.log(err);
                const msg = {
                    txt: 'Error, please try again later',
                    type: 'error'
                }
                eventBus.$emit('show-msg', msg)
            })
            // .then(() => this.loadNotes())
        },
        pinNote(noteId){
            keepService.pin(noteId)
            .then(() => this.loadNotes())
        },
        selectNote(note) {
            this.selectedNote = note
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            const searchStr = this.filterBy.byTxt.toLowerCase()
            var notesToShow = this.notes.filter(note => {
                return note.contents.toLowerCase().includes(searchStr)
            })
            // notesToShow = notesToShow.filter(note => { 
            //     return (note.listPrice.amount > this.filterBy.fromPrice && book.listPrice.amount < this.filterBy.toPrice)
            // })
            // return notesToShow
            return notesToShow
        }
    },
    components: {
        keepFilter,
        keepList,
        keepDetails,
        keepCompose
    },
    created() {
        this.loadNotes();
    },
}
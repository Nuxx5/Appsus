import { keepService } from '../services/keep.service.js'
import keepFilter from '../cmps/keep-filter.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepDetails from './keep-details.cmp.js'
import keepCompose from '../cmps/keep-compose.cmp.js'

export default { 
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <!-- <keep-filter @filtered="setFilter" /> -->
            <router-link to="/keep/add">Add a new note!</router-link>
            <keep-list :notes="notesToShow" @selected="selectNote" />
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
        removeNote(noteId) {
            noteService.remove(noteId)
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
            // if (!this.filterBy) return this.note
            // const searchStr = this.filterBy.byTitle.toLowerCase()
            // var notesToShow = this.notes.filter(note => {
            //     return note.title.toLowerCase().includes(searchStr)
            // })
            // notesToShow = notesToShow.filter(note => { 
            //     return (note.listPrice.amount > this.filterBy.fromPrice && book.listPrice.amount < this.filterBy.toPrice)
            // })
            // return notesToShow
            return this.notes;
        }
    },
    components: {
        keepFilter,
        keepList,
        keepDetails,
        keepCompose
    }
}
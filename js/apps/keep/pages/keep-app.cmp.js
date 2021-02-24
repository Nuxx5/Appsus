import { keepService } from '../services/keep.service.js'
import keepFilter from '../cmps/keep-filter.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepDetails from './keep-details.cmp.js'
import keepCompose from '../cmps/keep-compose.cmp.js'

export default { 
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <keep-filter @filtered="setFilter" />
            <router-link to="/keep/add">Add a new note!</router-link>
            <keep-list :notes="notesToShow" @selected="selectNote" />
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> -->
            <!-- <book-edit /> -->
        </section>
    `,
    components: {
        keepFilter,
        keepList,
    }
}
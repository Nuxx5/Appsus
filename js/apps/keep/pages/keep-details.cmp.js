import { keepService } from "../services/keep.service.js";
// import addReview from '../cmps/add-review.cmp.js'

export default {
    name: 'keep-details',
    template:`
    <section v-if="note" class="keep-details">
        <p>{{note.info.txt}}</p>
        <!-- <button @click="remove(note.id)">X</button> -->
        <router-link to="/keep">Back</router-link>
    </section>
    `,
    data () {
        return {
            note: null,
            // nextBookId: '',
            // prevBookId: ''
        }
    },

    methods: {
        loadNote() {
            const id = this.$route.params.noteId
            console.log(id)
            keepService.getById(id)
                .then(note => {
                    this.note = note
                    // this.nextBookId = bookService.getNextBookId(book.id)
                    // this.prevBookId = bookService.getPrevBookId(book.id)
                })

        },
        remove(noteId) {
            keepService.remove(noteId)
            .then(this.loadNote()) 
        }
    },
    computed: {
        // pageCount() {
        //     if (this.book.pageCount > 500) return 'Long Reading'
        //     if (this.book.pageCount > 200) return 'Decent Reading'
        //     if (this.book.pageCount < 100) return 'Light Reading'
        // },

        // agedBook() {
        //     if (new Date().getFullYear() - this.book.publishedDate > 10) return 'Veteran Book'
        //     if (new Date().getFullYear() - this.book.publishedDate < 1)  return 'New!'
        // },
        // setColor() {
        //     if (this.book.listPrice.amount > 150) return { red : true }
        //     if (this.book.listPrice.amount < 20) return { green : true }
        // },
        // onSale() {
        //     if (this.book.listPrice.isOnSale) return "../../img/onsale.png"
        // },
        // nextBookLink() {
        //     return '/book/' + this.nextBookId
        // },
        // PrevBookLink() {
        //     return '/book/' + this.prevBookId
        // }
    },

    components: {
        // addReview,
    },

    created() {
        this.loadNote()
    //     const id = this.$route.params.noteId
    //     keepService.getById(id)
    //         .then(note => {
    //             this.note = note
    //             // this.nextBookId = bookService.getNextBookId(book.id)
    // })
},

// watch: {
//     '$route.params.noteId'(id) {
//         console.log('Changed to', id);
//         this.loadNote();
//     }
// }
}

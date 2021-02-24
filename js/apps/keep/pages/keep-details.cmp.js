import { keepService } from "../services/keep.service.js";
// import addReview from '../cmps/add-review.cmp.js'

export default {
    template:`
    <section v-if="book" class="book-details">
        <p>{{note.info.txt}}
        <!-- <img :src="book.thumbnail">
        <img :src="onSale">
        <p>Title: {{book.title}}</p>
        <div v-for="author in book.authors">Author: {{author}}</div>
        <p>Publish Date: {{book.publishedDate}} {{agedBook}}</p>
        <p>Description: {{book.description.substr(0,100)}}</p>
        <div v-for="review in book.reviews">Reviews: {{review}}</div>
        <p>Page count: {{book.pageCount}} {{pageCount}}</p>
        <p>Category: {{book.categories.toLocaleString()}}</p>
        <p>Language: {{book.language}}</p>
        <p>Price: <span v-bind:class="setColor">{{book.listPrice.amount}} {{book.listPrice.currencyCode}}</span></p>
        <add-review :reviews="book.reviews"/> -->
        <router-link to="/book">Back</router-link>
        <!-- <router-link :to="nextBookLink">Next Book</router-link>
        <router-link :to="PrevBookLink">Previous Book</router-link> -->
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
        const id = this.$route.params.noteId
        keepService.getById(id)
            .then(note => {
                this.note = note
                // this.nextBookId = bookService.getNextBookId(book.id)
    })
},

watch: {
    '$route.params.noteId'(id) {
        console.log('Changed to', id);
        this.loadNote();
    }
}
}

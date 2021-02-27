
export default {
    name: 'long-text',
    props: ['txt'],
    template: `
            <section class="long-text">
                <p v-if="!isAllTxtShown">{{getTxt}}</p>
                <p v-else>{{txt}}</p>
                <button class="read-more-btn" v-if="txt.length>60" @click="toggleDesc">Read <span>{{moreOrLess}}</span></button>
            </section>
    `,
    data() {
        return {
            isAllTxtShown: false,
        }
    },
    methods:{
        toggleDesc() {
            this.isAllTxtShown = !this.isAllTxtShown
        }
    },
    computed: {
        getTxt() {
            const strToShow = this.txt.length <= 60 ? this.txt : `${this.txt.substr(0, 59)}...`
            return strToShow
        },
        moreOrLess() {
            if (this.isAllTxtShown) return 'Less'
            return 'More'
        }
    }
}
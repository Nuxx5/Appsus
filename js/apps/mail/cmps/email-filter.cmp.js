

export default {
    name: 'email-filter',
    props: ['count'],
    template: `
    <section class="email-filter">
        <input type="text" @input="setFilter" placeholder="Search mail" v-model="filterBy.bySubject">
        <select name="filter" id="filter" @input="setFilter" v-model="filterBy.byRead">
                <option value="all" selected>All</option>
                <option value="read">Read</option>
                <option value="unRead">Unread</option>
        </select>
        <select name="sort" id="sort" @input="setSort" v-model="sortBy">
                <option value="date" selected>Date</option>
                <option value="subject">Subject</option>
        </select>
        <span>✉{{count}}</span>
    </section>
    `,
    data() {
        return {
            filterBy: {
                bySubject: '',
                byRead: 'all',
            },
            sortBy: 'date'
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        },
        setSort() {
            console.log('this.sortBy', this.sortBy);
            this.$emit('sorted', this.sortBy)
        }
    }
}
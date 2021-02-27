export default {
    name: 'email-filter',
    props: ['count'],
    template: `
    <section class="email-filter">
        <input class="input-btn" type="text" @input="setFilter" placeholder="Search mail" v-model="filterBy.bySubject">
        <select class="filter-btn" name="filter" id="filter" @input="setFilter" v-model="filterBy.byRead">
                <option value="all" selected>All</option>
                <option value="read">Read</option>
                <option value="unRead">Unread</option>
        </select>
        <select class="sort-btn" name="sort" id="sort" @input="setSort" v-model="sortBy">
                <option value="date" selected>Date</option>
                <option value="subject">Subject</option>
        </select>
        <span>{{count}}</span> <i class="far fa-envelope count-envelope"></i>
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
            this.$emit('sorted', this.sortBy)
        }
    }
}
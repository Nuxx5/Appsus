

export default {
    name: 'email-filter',
    template: `
    <section class="email-filter">
        <input type="text" @input="setFilter" placeholder="Search mail" v-model="filterBy.byName">
        <select name="filter" id="filter" v-model="filterBy.byRead">
                <option value="subject" selected>All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
        </select>
        <select name="sort" id="sort" v-model="sort">
                <option value="subject" selected>Subject</option>
                <option value="date">Date</option>
        </select>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                byRead: null,
            },
            sort: null
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    }
}
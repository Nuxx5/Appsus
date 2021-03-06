export default {
    template: `
    <section class="keep-filter">
        <input class="search-input" type="text" @input="setFilter" placeholder="search...." v-model="filterBy.byTxt">
    </section>
    `,
    data() {
        return {
            filterBy: {
                byText: '',
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    },
}

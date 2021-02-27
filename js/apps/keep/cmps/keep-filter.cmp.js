export default {
    template: `
    <section class="keep-filter">
        <!-- <label> Search a note: </label>     -->
        <input class="search-input" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.byTxt">
    </section>
    `,
    data() {
        return {
            filterBy: {
                byText: '',
            }
        }
    },
    methods:{
        setFilter(){
            this.$emit('filtered', this.filterBy)
        }
    },
    created(){
        console.log('created');
    },
    // mounted(){
    //     console.log('mounted');
    //     this.$refs.input.focus()
    // }
}

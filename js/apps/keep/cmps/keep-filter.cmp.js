export default {
    template: `
    <section class="keep-filter">
        <label> Search a note: </label>    
        <input ref="input" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.byText">
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
    mounted(){
        console.log('mounted');
        this.$refs.input.focus()
    }
}

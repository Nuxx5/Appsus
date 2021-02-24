

export default {
    name: 'email-filter',
    template: `
    <section class="email-filter">
    <label> Search a mail: </label>    
        <input type="text" @input="setFilter" placeholder="Search name" v-model="filterBy.byName">
        <input type="number" @input="setFilter" placeholder="From Price" v-model="filterBy.fromPrice">
        <input type="number" @input="setFilter" placeholder="To Price" v-model="filterBy.toPrice">
        <button >Filter</button>
    </section>
    `
}
import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';





export default {
    name: 'email-app',
    template: `
        <section class="email-app">
            <!-- <email-filter @filtered="setFilter" /> -->
            <router-link to="/mail/add">Add a new mail</router-link>
            <!-- <email-list :books="mailsToShow" @remove="removeMail" @selected="selectMail" @loged="logedMail" /> -->


            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> -->
            <!-- <book-edit /> -->
        </section>
    `,

}

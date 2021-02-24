import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';


export default {
    name: 'email-app',
    template: `
        <section class="email-app">
            <email-filter @filtered="setFilter" />
            <router-link to="/mail/add">Add a new mail</router-link>
            <email-list :mails="mailsToShow" @remove="removeMail" @selected="selectMail" @loged="logedMail" />


            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> -->
            <!-- <book-edit /> -->
        </section>
    `, data() {
        return {
            mails: [],
            selectedMail: null,
            filterBy: null
        }
    },
    methods: {
        loadMails() {
            console.log('loadMails');
            this.mails = emailService.query();
            console.log('mails', this.mails);
        },
        removeMail(mailId) {
            emailService.remove(mailId);
        },
        selectMail(mail) {
            this.selectedMail = mail;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        logedMail(mailId) {
            console.log('mail id is:', mailId);
        }
    },
    computed: {
        mailsToShow() {
            var mailsToShow2 = this.mails;
            console.log('mailsToShow', mailsToShow2);
            return mailsToShow2;
        }
    },
    created() {
        this.loadMails();
    },
    components: {
        emailFilter,
        emailList,
    }
}

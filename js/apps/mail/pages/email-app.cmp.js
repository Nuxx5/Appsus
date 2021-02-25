import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emaiCompose from './email-compose.cmp.js';


export default {
    name: 'email-app',
    template: `
        <section class="email-app">
            <email-nav />
            <!-- <div class="email-nav">
                <router-link class="email-compose-btn" to="/mail/add">Compose</router-link>
                <router-link class="email-nav-btn" to="/mail">Inbox</router-link>
                <router-link class="email-nav-btn" to="/mail/starred">Starred</router-link>
                <router-link class="email-nav-btn" to="/mail/sent">Sent mail</router-link>
                <router-link class="email-nav-btn" to="/mail/draft">Draft</router-link>
            </div> -->
            <div class="email-main-content">
                <email-filter @filtered="setFilter" />
                <email-list :mails="mailsToShow" @remove="removeMail" @selected="selectMail" @loged="logedMail" />
            </div>
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
            this.mails = emailService.query()
                .then(mails => {
                    this.mails = mails;
                })
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
        emailNav,
        emaiCompose
    }
}

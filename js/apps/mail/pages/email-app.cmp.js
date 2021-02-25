import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emaiCompose from './email-compose.cmp.js';


export default {
    name: 'email-app',
    template: `
        <section class="email-app">
            <!-- <div class="email-nav">
                <router-link class="email-compose-btn" to="/mail/add">Compose</router-link>
                <router-link class="email-nav-btn" to="/mail">Inbox</router-link>
                <router-link class="email-nav-btn" to="/mail/starred">Starred</router-link>
                <router-link class="email-nav-btn" to="/mail/sent">Sent mail</router-link>
                <router-link class="email-nav-btn" to="/mail/draft">Draft</router-link>
            </div> -->
            <email-filter @filtered="setFilter" @sorted="setSort" />
            <div class="email-main-content">
                <email-nav />
                <email-list :mails="mailsToShow" @remove="removeMail" @selected="selectMail" @loged="logedMail" />
            </div>
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> -->
            <!-- <book-edit /> -->
        </section>
    `, data() {
        return {
            mails: [],
            selectedMail: null,
            filterBy: null,
            sortBy: null
        }
    },
    methods: {
        loadMails() {
            this.mails = emailService.query()
                .then(mails => {
                    this.mails = mails;
                })
        },
        removeMail(mailId) {
            emailService.remove(mailId)
                .then(this.loadMails)
            // .then(this.$router.push('/mail'))
        },
        selectMail(mail) {
            this.selectedMail = mail;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setSort(sortBy) {
            this.sortBy = sortBy;
        },
        logedMail(mailId) {
            console.log('mail id is:', mailId);
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const searchStr = this.filterBy.bySubject.toLowerCase();
            var mailsToShow = this.mails.filter(mail => {
                return mail.subject.toLowerCase().includes(searchStr)
            })
            if (this.filterBy.byRead === 'read') {
                mailsToShow = mailsToShow.filter(mail => {
                    return mail.isRead
                })
            } else if (this.filterBy.byRead === 'unRead') {
                mailsToShow = mailsToShow.filter(mail => {
                    return !mail.isRead
                })
            }
            if(this.sortBy === 'date'){
                console.log('sort date');
            } else console.log('sort subject');
            return mailsToShow;
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

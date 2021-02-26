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
            <email-filter :count="setStatus" @filtered="setFilter" @sorted="setSort" />
            <!-- <email-filter @filtered="setFilter" @sorted="setSort" /> -->
            <div class="email-main-content">
                <email-nav @navFiltered="setNavFilter" />
                <!-- <p>{{setStatus}}</p> -->
                <email-list :mails="mailsToShow" @setStar="setStar" @setRead="setRead" @remove="removeMail" @selected="selectMail" @loged="logedMail" />
            </div>
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> -->
            <!-- <book-edit /> -->
        </section>
    `, data() {
        return {
            mails: [],
            selectedMail: null,
            filterBy: null,
            sortBy: null,
            navFilterBy: null,
            isMails: false
        }
    },
    methods: {
        loadMails() {
            this.mails = emailService.query()
                .then(mails => {
                    this.mails = mails;
                    this.isMails = true;
                })
        },
        setStar(mail) {
            mail.isStarred = !mail.isStarred;
            emailService.edit(mail)
                .then(mail => {
                    this.mail = mail;
                })
        },
        setRead(mail) {
            mail.isRead = !mail.isRead;
            emailService.edit(mail)
                .then(mail => {
                    this.mail = mail;
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
        setNavFilter(navFilterBy) {
            this.navFilterBy = navFilterBy;
        },
        logedMail(mailId) {
            console.log('mail id is:', mailId);
        }
    },
    computed: {
        mailsToShow() {
            if(!this.isMails) return;
            // if (!this.sortBy && !this.filterBy) return this.mails;
            var mailsToShow = this.mails;
            if (this.sortBy) {
                if (this.sortBy === 'date') {
                    mailsToShow = this.mails.sort((mail1, mail2) => {
                        return mail1.subject.localeCompare(mail2.subject);
                    });
                } else {
                    mailsToShow = this.mails.sort(function (a, b) { return a.sentAt - b.sentAt });
                }
            }
            if (this.filterBy) {
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
            }
            if (this.navFilterBy) {
                // console.log('navFilterBy', this.navFilterBy);
                if (this.navFilterBy === 'inbox') {
                    mailsToShow = mailsToShow;
                } else if (this.navFilterBy === 'starred') {
                    mailsToShow = mailsToShow.filter(mail => {
                        return mail.isStarred
                    })
                } else if(this.navFilterBy === 'sent') {
                    mailsToShow = mailsToShow.filter(mail => {
                        return mail.isSent
                    })
                } else if(this.navFilterBy === 'trash') {
                    mailsToShow = mailsToShow.filter(mail => {
                        return mail.isTrash
                    })
                }
            }
            return mailsToShow;
        },
        setStatus() {
            if (!this.isMails) return;
            var count = 0;
            this.mails.forEach(mail => {
                if (!mail.isRead) {
                    return count++;
                }
            })
            return count;
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

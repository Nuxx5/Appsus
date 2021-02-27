import { emailService } from '../services/email.service.js';
import emailNav from '../cmps/email-nav.cmp.js';
import longText  from '../../../cmps/long-text.cmp.js';

export default {
    name: 'email-details',
    // props: ['mail'],
    template: `
    <section v-if="mail" class="email-details">
        <!-- <div class="email-details-content"> -->
        <email-nav />
        <div class="email-details-content">
            <div class="details-header">
                <p>Subject: {{mail.subject}}</p>
                <p>From: {{mail.from}}</p>
                <p>To: {{mail.to}}</p>
                <p>Time: {{setTime}}</p>
            </div>
            <!-- <p>{{mail.body}}</p> -->
            <div class="details-body">
                <long-text :txt="mail.body" />
            </div>
            <div class="details-btn">
                <button class="delete-btn" @click="remove(mail.id)">🗑️</button>
                <router-link class="details-back-btn" to="/mail">Back</router-link>
            </div>
        </div>
        <!-- </div> -->
    </section>
    `,
    data() {
        return {
            // descLength: null,
            mail: null
        }
    },
    methods: {
        loadMail() {
            const mailId = this.$route.params.mailId;
            // console.log('mail.id details1', mailId);
            emailService.getById(mailId)
                .then(mail => {
                    this.mail = mail;
                    this.mail.isRead = true;
                    // console.log('mail', this.mail);
                    emailService.edit(this.mail)
                    .then(mail => {
                        this.mail = mail;
                    })
                });
        },
        remove(mailId) {
            emailService.remove(mailId)
                .then(this.$router.push('/mail'))
                // .then(this.$emit('showList'));
        }
    },
    computed: {
        setTime() {
            const time = new Date(this.mail.sentAt).toLocaleString();
            return time;
        }
    },
    created() {
        this.loadMail();
    },
    // watch: {
    //     '$route.params.mailId'(id) {
    //         console.log('Changed to', id);
    //         this.loadMail();
    //     }
    // }
    components: {
        emailNav,
        longText
    }
}
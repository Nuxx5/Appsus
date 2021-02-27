import { emailService } from '../services/email.service.js';
import emailNav from '../cmps/email-nav.cmp.js';
import longText from '../../../cmps/long-text.cmp.js';

export default {
    name: 'email-details',
    template: `
    <section v-if="mail" class="email-details">
        <email-nav />
        <div class="email-details-content">
            <div class="details-header">
                <p>Subject: {{mail.subject}}</p>
                <p>From: {{mail.from}}</p>
                <p>To: {{mail.to}}</p>
                <p>Time: {{setTime}}</p>
            </div>
            <div class="details-body">
                <long-text :txt="mail.body" />
            </div>
            <div class="details-btn">
                <button class="delete-btn" @click="remove(mail.id)"><i class="far fa-trash-alt"></i></button>
                <router-link class="details-back-btn" to="/mail">Back</router-link>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    methods: {
        loadMail() {
            const mailId = this.$route.params.mailId;
            emailService.getById(mailId)
                .then(mail => {
                    this.mail = mail;
                    this.mail.isRead = true;
                    emailService.edit(this.mail)
                        .then(mail => {
                            this.mail = mail;
                        })
                });
        },
        remove(mailId) {
            emailService.remove(mailId)
                .then(this.$router.push('/mail'))
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
    components: {
        emailNav,
        longText
    }
}
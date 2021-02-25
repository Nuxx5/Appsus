import { emailService } from '../services/email.service.js';
import emailNav from '../cmps/email-nav.cmp.js';


export default {
    name: 'email-details',
    // props: ['mail'],
    template: `
    <section v-if="mail" class="email-details">
        <email-nav />
        <div class="email-details-content">
            <p>Subject: {{mail.subject}}</p>
            <p>From: {{mail.from}}</p>
            <p>To: {{mail.to}}</p>
            <p>{{setTime}}</p>
            <p>{{mail.body}}</p>
            <button @click="remove(mail.id)">🗑️</button>
            <router-link to="/mail">Back</router-link>
        </div>
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
            console.log('mail.id details1', mailId);
            emailService.getById(mailId)
                .then(mail => {
                    this.mail = mail;
                    console.log('mail', this.mail);
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
        emailNav
    }
}
import { emailService } from '../services/email.service.js';


export default {
    name: 'email-details',
    // props: ['mail'],
    template: `
    <section  class="email-details">
        <p>Subject: {{mail.subject}}</p>
        <p>Subject: </p>
        <router-link to="/mail">Back</router-link>
    </section>
    `,
    // v-if="mail"
    data() {
        return {
            // descLength: null,
            mail: null,
        }
    },
    methods: {
        loadMail() {
            const mailId = this.$route.params.mailId;
            console.log('mail.id details1', mailId);
            emailService.getById(mailId)
                .then(mail => {
                    this.mail = mail;
                });
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
}
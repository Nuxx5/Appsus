import { emailService } from '../services/email.service.js';
import emailNav from '../cmps/email-nav.cmp.js';

export default {
    name: 'email-compose',
    template: `
    <section class="email-compose">
        <email-nav />
        <form @submit.prevent="saveMail" class="email-compose-content">
            <h1>New message</h1>
            <label>To </label>
            <input type="text" placeholder="" v-model="mail.to" />
            <label>Subject </label>
            <input type="text" placeholder="" v-model="mail.subject" />
            <textarea cols="30" rows="10" v-model="mail.body"></textarea>
            <button>Save</button>
        </form>
    </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    methods: {
        saveMail(){
            emailService.save(this.mail)
            .then(this.$router.push('/mail'))
            // .then(() => (this.$emit('loadMails')))
        }
    },
    created() {
        this.mail = emailService.getEmptyMail();
    },
    components: {
        emailNav
    }
}

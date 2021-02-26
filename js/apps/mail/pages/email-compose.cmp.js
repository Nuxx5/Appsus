import { emailService } from '../services/email.service.js';
import emailNav from '../cmps/email-nav.cmp.js';
import { eventBus } from '../../../services/event-bus.service.js';

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
        saveMail() {
            emailService.save(this.mail)
                .then(this.mail.isSent = true)
                .then(mail => {
                    console.log('Saved mail:', mail);
                    const msg = {
                        txt: 'Mail saved succesfully',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg)
                    this.$router.push('/mail')
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg)
                })
        }

    },
    created() {
        this.mail = emailService.getEmptyMail();
    },
    components: {
        emailNav
    }
}

import { emailService } from '../services/email.service.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { eventBus } from '../../../services/event-bus.service.js';

export default {
    name: 'email-compose',
    template: `
    <section class="email-compose">
        <div class="email-compose-content">
        <email-nav />
        <form @submit.prevent="saveMail" class="email-compose-form">
            <h1 class="compose-header">New message</h1>
            <div class="compose-to">
                <label>To </label>
                <input type="text" placeholder="" v-model="mail.to" />
            </div>
            <div class="compose-to">
            <label>Subject </label>
            <input type="text" placeholder="" v-model="mail.subject" />
            </div>
            <textarea cols="30" rows="20" v-model="mail.body"></textarea>
            <div class="email-compose-btns">
                <button class="compose-save-btn">SEND</button>
                <router-link to="/mail">
                <button class="compose-save-btn">BACK</button>
                </router-link>
            </div>
        </form>
        </div>
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
        emailNav,
        emailFilter
    }
}

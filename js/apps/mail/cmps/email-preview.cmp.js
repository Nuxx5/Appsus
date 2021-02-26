import { emailService } from '../services/email.service.js';

export default {
    name: 'email-preview',
    props: ['mail'],
    template: `
    <section class="email-preview">
        <p>{{mail.from}}</p>
        <p v-if="!mail.isRead" class="unread">{{mail.subject}}</p>
        <p v-else="mail.isRead" class="read">{{mail.subject}}</p>
        <p>{{setTime}}</p>
        <!-- <button @click="remove(mail.id)">⭐✰</button> -->
        <!-- <button @click="remove(mail.id)">🗑️</button> -->
        <!-- <router-link :to="'/mail/'+mail.id"> </router-link> -->
        <!-- <p>{{mail.body}}</p> -->
    </section>
    `,
    data() {
        return {
            time: null
        }
    },
    methods: {
        // remove(mailId) {
        //     emailService.remove(mailId)
        //         .then(this.$router.push('/mail'))

                // .then(this.$emit('showList'));
        // }
    },
    computed: {
        setTime() {
            const time = new Date(this.mail.sentAt).toLocaleTimeString();
            return time;
        },
    }
}
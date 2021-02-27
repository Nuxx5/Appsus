
export default {
    name: 'email-preview',
    props: ['mail'],
    template: `
    <section class="email-preview">
        <p>{{mail.from}}</p>
        <p v-if="!mail.isRead" class="unread">{{mail.subject}}</p>
        <p v-else="mail.isRead" class="read">{{mail.subject}}</p>
        <p>{{setTime}}</p>
    </section>
    `,
    data() {
        return {
            time: null
        }
    },
    methods: {
    },
    computed: {
        setTime() {
            const time = new Date(this.mail.sentAt).toLocaleTimeString();
            return time;
        },
    }
}
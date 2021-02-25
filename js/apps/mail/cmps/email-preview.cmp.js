export default {
    name: 'email-preview',
    props: ['mail'],
    template: `
    <section class="email-preview">
        <p>{{mail.from}}</p>
        <p v-if="!mail.isRead" class="unread">{{mail.subject}}</p>
        <p v-else="mail.isRead" class="read">{{mail.subject}}</p>
        <p>{{setTime}}</p>
        <!-- <router-link :to="'/mail/'+mail.id"> </router-link> -->
        <!-- <p>{{mail.body}}</p> -->
    </section>
    `,
    data() {
        return {
            time: null
        }
    },
    computed: {
        setTime() {
            console.log('time', this.mail.sentAt);
            const time = new Date(this.mail.sentAt).toLocaleTimeString();
            // const time = new Date(this.mail.sentAt);
            console.log('time', time);
            // this.time = this.mail.sentAt;
            return time;
        }
    }
}
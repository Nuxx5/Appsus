export default {
    name: 'email-preview',
    props: ['mail'],
    template: `
    <section class="email-preview">
        <p v-if="!mail.isRead" class="unread">{{mail.subject}}</p>
        <p v-else="mail.isRead" class="read">{{mail.subject}}</p>
        <!-- <router-link :to="'/mail/'+mail.id"> </router-link> -->
        <!-- <p>{{mail.body}}</p> -->
    </section>
    `
}
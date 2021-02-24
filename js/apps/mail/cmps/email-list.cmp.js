import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    props: ['mails'],
    template: `
    <section>
        <ul class="email-list">
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                <email-preview :mail="mail" @click.native="logId(mail.subject)" />
                <div class="btns-container">
                    <!-- <button @click="remove(mail.id)">X</button> -->
                    <!-- <button @click="select(book)">Details</button> -->
                    <router-link :to="'/mail/'+mail.id">Details</router-link>
                </div>
            </li>
        </ul>
    </section>
    `,
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        select(mail) {
            this.$emit('selected', mail);
        },
        logId(mailId) {
            this.$emit('loged', mailId);
        }
    },
    components:{
        emailPreview
    }
}
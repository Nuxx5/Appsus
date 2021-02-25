import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    props: ['mails'],
    template: `
    <section class="email-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id"  class="email-list-item" >
                <email-preview :mail="mail" @click.native="select(mail.id)" />
                <div class="email-list-btns">
                    <button @click="addStar(mail.id)">⭐✰</button>
                    <button @click="remove(mail.id)">🗑️</button>
                    <!-- <button @click="select(book)">Details</button> -->
                    <!-- <email-details @showList="showMails" /> -->
                    <!-- <router-link :to="'/mail/'+mail.id" tag="div">Details</router-link> -->
                </div>
            </li>
        </ul>
    </section>
    `,
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        addStar(){
            console.log('addStar');
        },
        showMails(){
            console.log('showMails');
        },
        // select(mail) {
        //     this.$emit('selected', mail);
        // },
        select(mailId) {
            // this.$emit('loged', mailId);
            console.log('select', mailId);
            this.$router.push('/mail/'+mailId)
        }
    },
    components:{
        emailPreview
    }
}
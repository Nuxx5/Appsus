import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    props: ['mails'],
    template: `
    <section>
        <ul class="email-list">
            <li v-for="mail in mails" :key="mail.id" class="email-list-container" >
                <email-preview :mail="mail" @click.native="select(mail.id)" />
                <!-- <div class="btns-container"> -->
                    <!-- <button @click="remove(mail.id)">X</button> -->
                    <!-- <button @click="select(book)">Details</button> -->
                    <!-- <email-details @showList="showMails" /> -->
                    <!-- <router-link :to="'/mail/'+mail.id" tag="div">Details</router-link> -->
                <!-- </div> -->
            </li>
        </ul>
    </section>
    `,
    methods: {
        // remove(mailId) {
        //     this.$emit('remove', mailId);
        // },
        showMails(){
            console.log('showMails');
        },
        // select(mail) {
        //     this.$emit('selected', mail);
        // },
        select(mailId) {
            // this.$emit('loged', mailId);
            this.$router.push('/mail/'+mailId)
        }
    },
    components:{
        emailPreview
    }
}
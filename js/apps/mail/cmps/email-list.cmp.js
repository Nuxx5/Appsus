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
                    <button class="star" v-if="!mail.isStarred" @click="setStar(mail)">✰</button>
                    <button class="star" v-else="mail.isStarred" @click="setStar(mail)">⭐</button>
                    <button class="read-btn" v-if="!mail.isRead" @click="setRead(mail)">✉</button>
                    <button class="read-btn" v-if="mail.isRead" @click="setRead(mail)">📨</button>
                    <button @click="remove(mail.id)">🗑️</button>
                    <!-- <button @click="select(book)">Details</button> -->
                    <!-- <email-details @showList="showMails" /> -->
                    <!-- <router-link :to="'/mail/'+mail.id" tag="div">Details</router-link> -->
                </div>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            // star: '✰'
        }
    },
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        setStar(mail) {
            this.$emit('setStar', mail);
        },
        setRead(mail) {
            this.$emit('setRead', mail);
        },
        setStatus(){

        },
        showMails() {
            console.log('showMails');
        },
        // select(mail) {
        //     this.$emit('selected', mail);
        // },
        select(mailId) {
            // this.$emit('loged', mailId);
            // console.log('select', mailId);
            this.$router.push('/mail/' + mailId)
        }
    },
    components: {
        emailPreview
    }
}
export default {
    props: ['note'],
    template: `
        <section class="keep-video">
        <iframe width="320" height="240"
        :src="videoUrl" :note="note">
        </iframe>
        </section>`,
        computed: {
            videoUrl(){
                var url = this.note.contents
                console.log(this.note.contents)
                var convertedStr = url.substring(url.indexOf('?v=') + 3)
                return 'https://www.youtube.com/embed/' + convertedStr
            }
        }
}

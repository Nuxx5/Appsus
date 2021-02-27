import { keepService } from '../services/keep.service.js'

export default {
    name: 'keep-audio',
    props: ['note'],
    template: `
    <audio class="audio" controls :src="note.contents"></audio>`
}
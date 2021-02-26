import { keepService } from '../services/keep.service.js'

export default {
    name: 'keep-audio',
    props: ['note'],
    template:`
    <audio controls :src="note.contents"></audio>`
}
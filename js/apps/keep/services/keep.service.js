import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTES_KEY = 'notes'
const gNotes = _createNotes()

export const keepService = {
    query,
    getById,
    remove,
    save,
    edit,
    pin
}

function query() {
    return storageService.query(NOTES_KEY)
}

function edit(note) {
    return storageService.put(NOTES_KEY, note)
}

function save(note) {
    return storageService.post(NOTES_KEY, note)
}

function getById(id) {
    return storageService.get(NOTES_KEY, id)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function pin(noteId) {
    return storageService.pin(NOTES_KEY, noteId)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: 'Txt',
                isPinned: true,
                color: '#7FFFD4',
                contents: "Fullstack Me Baby!"
            },
            {
                id: utilService.makeId(),
                type: 'Img',
                isPinned: false,
                color: '#FF7F50',
                contents: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",

            },
            {
                id: utilService.makeId(),
                type: 'Video',
                isPinned: false,
                color: '#556B2F',
                contents: "https://www.youtube.com/watch?v=EykdLqt7q34",

            },
            {
                id: utilService.makeId(),
                type: 'Audio',
                isPinned: false,
                color: '#CD5C5C',
                contents: "../../../../audio/ringtone.mp3",
            },
            {
                id: utilService.makeId(),
                type: 'Txt',
                isPinned: false,
                color: '#F0E68C',
                contents: "Don't forget to smile!"
            },
            {
                id: utilService.makeId(),
                type: 'Img',
                isPinned: false,
                color: '#ADD8E6',
                contents: "https://images.pexels.com/photos/1936299/pexels-photo-1936299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

            },

        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}

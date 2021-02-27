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

function query(){
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
                color: 'blue',
                contents: "Fullstack Me Baby!"
            },
            {
                id: utilService.makeId(),
                type: 'Img',
                isPinned: false,
                color: 'red',
                contents: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
                   
            },
            {
                id: utilService.makeId(),
                type: 'Video',
                isPinned: false,
                color: 'green',
                contents: "https://www.youtube.com/watch?v=EykdLqt7q34",
                   
            },
            {
                id: utilService.makeId(),
                type: 'Audio',
                isPinned: false,
                color: 'yellow',
                contents: "../../../../audio/ringtone.mp3",
            },
        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}

"/media/cc0-audio/t-rex-roar.mp3"
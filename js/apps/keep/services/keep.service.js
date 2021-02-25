import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTES_KEY = 'notes'
const gNotes = _createNotes()

export const keepService = {
    query,
    getById,
    remove,
    save,
    edit
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

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: 'txt',
                isPinned: true,
                contents: "Fullstack Me Baby!"
            },
            {
                id: utilService.makeId(),
                type: 'img',
                contents: "https://cataas.com/cat/says/hello%20world!",
                   
            },
            {
                id: utilService.makeId(),
                type: 'video',
                contents: "https://www.youtube.com/watch?v=VugasBUoBdI&feature=youtu.be",
                   
            },
        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}
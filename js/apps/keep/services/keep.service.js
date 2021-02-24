import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTES_KEY = 'notes'
const gNotes = _createNotes()

export const keepService = {
    query,
    getById
}

function query(){
    return gNotes
}

function getById(id) {
    // return storageService.get(NOTES_KEY, id)
  }

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: "NoteTxt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteImg",
                info: {
                    url: "https://cataas.com/cat/says/hello%20world!",
                    title: "Me Cat Mi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteTodos", info: {
                    label: "How was it:", todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            }
        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}
import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js';

const MAILS_KEY = 'mails';
const gMails = _createMails();


export const emailService = {
    query,
    getById

}

function query() {
    return gMails;

    // return storageService.query(BOOKS_KEY)
    //     .then(books => {
    //         if (!books.length) {
    //             utilService.saveToStorage(BOOKS_KEY, gBooks);
    //             books = gBooks;
    //         }
    //         return books;
    //     })
}

function getById(id) {
    return storageService.get(MAILS_KEY, id)
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [
            {
                id: utilService.makeId(),
                subject: 'Wassap?',
                body: 'Pick up!',
                isRead: true,
                sentAt: 1551133930594
            },
            {
                id: utilService.makeId(),
                subject: 'Hey',
                body: 'Are you sure?',
                isRead: false,
                sentAt: 1551133930578
            },
            {
                id: utilService.makeId(),
                subject: 'Need to do',
                body: 'Please pick the kids from school',
                isRead: true,
                sentAt: 1551133930400
            },
            {
                id: utilService.makeId(),
                subject: 'Good news',
                body: 'I think you should check your mail',
                isRead: false,
                sentAt: 1551133930444
            },
            {
                id: utilService.makeId(),
                subject: 'About the car',
                body: 'How is this car?',
                isRead: false,
                sentAt: 1551133930394
            },
            {
                id: utilService.makeId(),
                subject: 'About Javascript',
                body: 'You are some master in Javascript',
                isRead: false,
                sentAt: 1551133930474
            }

        ]

        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}

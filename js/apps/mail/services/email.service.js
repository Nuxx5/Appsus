import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js';

const MAILS_KEY = 'mails';
const gMails = _createMails();


export const emailService = {
    query,
    getById,
    remove

}

function query() {
    return storageService.query(MAILS_KEY);

    // return storageService.query(BOOKS_KEY)
    //     .then(books => {
    //         if (!books.length) {
    //             utilService.saveToStorage(BOOKS_KEY, gBooks);
    //             books = gBooks;
    //         }
    //         return books;
    //     })
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
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
                from: 'Bari',
                to: 'Ran',
                subject: 'Wassap?',
                body: 'As Moti told you, you should not leave your dog outside, his making a lot of noise.',
                isRead: true,
                sentAt: 1551133930594
            },
            {
                id: utilService.makeId(),
                from: 'Bari',
                to: 'Ran',
                subject: 'Hey',
                body: 'Are you sure?',
                isRead: false,
                sentAt: 1551133930578
            },
            {
                id: utilService.makeId(),
                from: 'Bari',
                to: 'Ran',
                subject: 'Need to do',
                body: 'Please pick the kids from school. They are waiting for you for more than two hours.',
                isRead: true,
                sentAt: 1551133930400
            },
            {
                id: utilService.makeId(),
                from: 'Bari',
                to: 'Ran',
                subject: 'Good news',
                body: 'I think you should check your mail. I heard someone is looking for you around the block.',
                isRead: false,
                sentAt: 1551133930444
            },
            {
                id: utilService.makeId(),
                from: 'Bari',
                to: 'Ran',
                subject: 'About the car',
                body: 'Hi, how is this car? I heard that Subayo is a great car, like shown on TV that can go everywere and very comfortable for the family.',
                isRead: false,
                sentAt: 1551133930394
            },
            {
                id: utilService.makeId(),
                from: 'Bari',
                to: 'Ran',
                subject: 'About Javascript',
                body: 'Do you familiar with a master in Javascript? I think maybe, not so far, you would not need one, because you will be one.',
                isRead: false,
                sentAt: 1551133930474
            }

        ]

        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}

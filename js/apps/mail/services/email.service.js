import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js';

const MAILS_KEY = 'mails';
const gMails = _createMails();


export const emailService = {
    query,
    getById,
    remove,
    save,
    edit,
    getEmptyMail
}

function query() {
    return storageService.query(MAILS_KEY);
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}

function getById(id) {
    return storageService.get(MAILS_KEY, id)
}

function save(mail) {
    return storageService.post(MAILS_KEY, mail)
}

function edit(mail) {
    return storageService.put(MAILS_KEY, mail)
}

function getEmptyMail() {
    return {
        id: '',
        from: 'Bari',
        to: '',
        subject: '',
        body: '',
        isRead: true,
        isStarred: false,
        isSent: false,
        isTrash: false,
        sentAt: Date.now()
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [
            {
                id: utilService.makeId(),
                from: 'Ran',
                to: 'Bari',
                subject: 'Wassap?',
                body: 'As Moti told you, you should not leave your dog outside, his making a lot of noise.',
                isRead: true,
                isStarred: false,
                isSent: false,
                isTrash: false,
                sentAt: 1551133930594
            },
            {
                id: utilService.makeId(),
                from: 'Ran',
                to: 'Bari',
                subject: 'Hey',
                body: 'Are you sure? I did not notice that today is holidy. I went to work and the office was closed.',
                isRead: false,
                isStarred: false,
                isSent: false,
                isTrash: false,
                sentAt: 1614254707784
            },
            {
                id: utilService.makeId(),
                from: 'Yossi',
                to: 'Bari',
                subject: 'Need to do',
                body: 'Please pick the kids from school. They are waiting for you for more than two hours.',
                isRead: true,
                isStarred: true,
                isSent: false,
                isTrash: false,
                sentAt: 1614154707784
            },
            {
                id: utilService.makeId(),
                from: 'Nurit',
                to: 'Bari',
                subject: 'Good news',
                body: 'I think you should check your mail. I heard someone is looking for you around the block.',
                isRead: false,
                isStarred: false,
                isSent: false,
                isTrash: false,
                sentAt: 1610154707784
            },
            {
                id: utilService.makeId(),
                from: 'David',
                to: 'Bari',
                subject: 'About the car',
                body: 'Hi, how is this car? I heard that Subayo is a great car, like shown on TV that can go everywere and very comfortable for the family.',
                isRead: false,
                isStarred: true,
                isSent: false,
                isTrash: false,
                sentAt: 1581133930394
            },
            {
                id: utilService.makeId(),
                from: 'Rachel',
                to: 'Bari',
                subject: 'About Javascript',
                body: 'Do you familiar with a master in Javascript? I think maybe, not so far, you would not need one, because you will be one.',
                isRead: true,
                isStarred: false,
                isSent: false,
                isTrash: false,
                sentAt: 1600132930474
            },
            {
                id: utilService.makeId(),
                from: 'Ran',
                to: 'Bari',
                subject: 'How is the weather today?',
                body: 'Here at the northern part of Israel the weather now is a bit cold, but you can see around you the snowy mountains, which is beautifall',
                isRead: false,
                isStarred: true,
                isSent: false,
                isTrash: false,
                sentAt: 1600133939474
            },
            {
                id: utilService.makeId(),
                from: 'Bari',
                to: 'Ran',
                subject: 'Try our service...',
                body: 'You should try the laundry services that provides by the laundry company Lolo. They will do a very good job for your clothing.',
                isRead: true,
                isStarred: true,
                isSent: true,
                isTrash: false,
                sentAt: 1602133930474
            },
            {
                id: utilService.makeId(),
                from: 'Dan',
                to: 'Bari',
                subject: 'Take a look at this',
                body: 'I know you probably know that, but just in case you missed it...',
                isRead: true,
                isStarred: true,
                isSent: false,
                isTrash: false,
                sentAt: 1600135530474
            },
            {
                id: utilService.makeId(),
                from: 'Bari',
                to: 'Joe',
                subject: 'Maybe you saw alison',
                body: 'Did you talked to Alison lately. She went to visit someone abroad like a month ago, and I did not heard from here. Maybe you know what is with here.',
                isRead: true,
                isStarred: false,
                isSent: true,
                isTrash: false,
                sentAt: 1602335530474
            },
            {
                id: utilService.makeId(),
                from: 'Matan',
                to: 'Bari',
                subject: 'Reservation #123',
                body: 'We ordered the appartment on the second floor for three nights, and now we saw that the reservation is not confirmed. What happend?',
                isRead: false,
                isStarred: true,
                isSent: false,
                isTrash: false,
                sentAt: 1602335777474
            }

        ]

        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}

import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";


let store = {
    _state: {
        friendslist: {
            friends: [
                {
                    name: 'Veronika',
                    id: 1
                },
                {
                    name: 'Nikita',
                    id: 2
                },
                {
                    name: 'Artemka',
                    id: 3
                },
                {
                    name: 'Nastya',
                    id: 4
                }

            ]
        },
        messagesPage: {
            messageArray: [
                {
                    text: 'hi',
                    id: 1,
                    name: 'Vasya'
                },
                {
                    text: 'da ladno?',
                    id: 2,
                    name: 'Petka'
                },
                {
                    text: 'kak tam gagri?',
                    id: 3,
                    name: 'Boris'
                },
                {
                    text: 'i got ps4',
                    id: 3,
                    name: 'Maximka'
                },
                {
                    text: 'i want to drink',
                    id: 4,
                    name: 'Anton'
                },
            ],
            newMessageText: 'Hello',
        },

        profilePage: {
            postArray: [
                {
                    message: 'Hello Kitty',
                    counter: '10'
                },
                {
                    message: 'Da ny nax',
                    counter: '22'
                },
                {
                    message: 'davaika ya popadasdarobyu',
                    counter: '33'
                },
            ],
            newPostText: 'new app'
        }
    },
    _callsubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;

    },
    subscribe(observer) {

        this._callsubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callsubscriber(this._state);
        
    },
};

export default store;
window.store = store;

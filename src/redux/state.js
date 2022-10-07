let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let MESSAGE_TEXT = 'MESSAGE-TEXT';
let SEND_MESSAGE = 'SEND-MESSAGE';
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

        if (action.type === ADD_POST) {

            let newPost = {
                message: this._state.profilePage.newPostText,
                counter: 0,
            };
            this._state.profilePage.postArray.push(newPost);
            this._state.profilePage.newPostText = ' ';
            this._callsubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber(this._state)
        } else if (action.type === MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callsubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 0,
                text: this._state.messagesPage.newMessageText,
                name: 0,
            }
            this._state.messagesPage.messageArray.push(newMessage);
            this._state.messagesPage.newMessageText = ' ';
            this._callsubscriber(this._state);
        }
    },
};

export let addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export let updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export let onMessageChangeActionCreator = (text) => {
    return {
        type: MESSAGE_TEXT,
        newText: text
    }
};

export let sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
};

export default store;
window.store = store;

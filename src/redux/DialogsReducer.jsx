
let MESSAGE_TEXT = 'MESSAGE-TEXT';
let SEND_MESSAGE = 'SEND-MESSAGE';
const dialogsReducer = (state, action) => {

    if (action.type === MESSAGE_TEXT) {
        state.newMessageText = action.newText;

    } else if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 0,
            text: state.newMessageText,
            name: 0,
        }
        state.messageArray.push(newMessage);
        state.newMessageText = ' ';
    }
    return state;
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

export default dialogsReducer;
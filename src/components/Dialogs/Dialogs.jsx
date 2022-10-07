import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { onMessageChangeActionCreator } from '../../redux/state';
import { sendMessageActionCreator } from '../../redux/state';


const Dialogs = (props) => {

    let messageText = React.createRef();

    let onMessageChange = () =>{
        let newText = messageText.current.value;
        props.dispatch(onMessageChangeActionCreator())
    };

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let contElement = props.state.messageArray.map(contact => <DialogItem name={contact.name} id={contact.id} />)
    
    let messElement = props.state.messageArray.map(message => <Message text={message.text} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {contElement}
            </div>
            <div className={s.messages}>
                {messElement}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={messageText} value = {props.state.newMessageText}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs
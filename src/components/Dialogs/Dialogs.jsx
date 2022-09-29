import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let messageText = React.createRef();

    function clicked() {
        let text = messageText.current.value;
        alert(text)
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
                <textarea ref={messageText}></textarea>
            </div>
            <div>
                <button onClick={clicked}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs
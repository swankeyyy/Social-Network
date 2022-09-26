import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    
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

        </div>
    )
}

export default Dialogs
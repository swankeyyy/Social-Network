import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let asd = [
        {id:1, name: 'Vasiliy,'},
        {id:2, name: 'Petka'},
    ]

    let dsa = [
        {text: 'hi'},
        {text: 'da ladno?'},
        {text: 'kak tam gagri?'}
    ]

    let messagElement = dsa.map(message => <Message text= {message.text} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem className = {s.link} name = {asd[0].name} id = {asd[0].id} />
                <DialogItem name="svetka" id="2" />
            </div>
            <div className={s.messages}>
                {messagElement}
            </div>

        </div>
    )
}

export default Dialogs
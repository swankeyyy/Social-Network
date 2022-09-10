import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="ANdrey" id="1" />
                <DialogItem name="svetka" id="2" />
                <DialogItem name="pavel" id="3" />
                <DialogItem name="lox" id="4" />
            </div>
            <div className={s.messages}>
                <Message text='hi' />
                <Message text='123' />
                <Message text='43' />
                <Message text='123' />
            </div>

        </div>
    )
}

export default Dialogs
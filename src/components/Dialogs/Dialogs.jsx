import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='user1' id='1'/>
                    <DialogItem name='user2' id='2'/>
                    <DialogItem name='user3' id='3'/>
                    <DialogItem name='user4' id='4'/>
                    <DialogItem name='user5' id='5'/>
                    <DialogItem name='user6' id='6'/>

                </div>
                <div className={s.messages}>
                    <Message message='hi'/>
                    <Message message='how are you?'/>
                    <Message message='yo'/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>user1</div>
                    <div className={s.dialog}>user2</div>
                    <div className={s.dialog}>user3</div>
                    <div className={s.dialog}>user4</div>
                    <div className={s.dialog}>user5</div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>hi</div>
                    <div className={s.message}>how are you?</div>
                    <div className={s.message}>yo</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
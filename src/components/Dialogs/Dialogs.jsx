import React from "react";
import style from "./Dialogs.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    
    let dialogsElements = (props.dialogsPage.dialogs).map((item) => <DialogItem name={item.name} id={item.id} key={item.id} />);
    let messagesElements = (props.dialogsPage.messages).map((item) => { return (<Message message={item.message} key={item.id} />) });


    // Функция для ввода сообщений
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {/* // Использование НОВОГО МАССИВА ПОЛЬЗОВАТЕЛЕЙ */}
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {/* // Использование НОВОГО МАССИВА СООБЩЕНИЙ */}
                {messagesElements}



            <div className={style.postsForm}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessage}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
            </div>


            </div>
        </div>
    )
};

export default Dialogs;
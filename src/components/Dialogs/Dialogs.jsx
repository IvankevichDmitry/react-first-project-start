import React from "react";
import style from "./Dialogs.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    // 3. МЕТОД МАССИВОВ MAP 
    // *key - просто так, для React
    let dialogsElements = (props.state.dialogs).map((item) => <DialogItem name={item.name} id={item.id} key={item.id} />);
    // Суть метода MAP
    // let dialogsElements = [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    // ]
    let messagesElements = (props.state.messages).map((item) => { return (<Message message={item.message} key={item.id} />) });


    let newMessageElement = React.createRef()
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };


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
                        <textarea ref={newMessageElement}></textarea>
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